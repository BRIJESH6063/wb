import grid from 'gridfs-stream' ;
import mongoose from 'mongoose' ;
import { GridFSBucket } from "mongodb";



const url = "http://localhost:8000" ;

// let gfs, gridFsBucket ;
// const conn = mongoose.connection ;
// conn.once('open',() => {
//   gridFsBucket = new mongoose.mongo.GridFsBucket(conn.db, {
//     bucketName: 'fs'
//   }) ;
//   gfs = grid(conn.db, mongoose.mongo) ;
//   gfs.collection('fs') ;
// })

let gridFsBucket;

const conn = mongoose.connection;

conn.once("open", () => {
  gridFsBucket = new GridFSBucket(conn.db, {
    bucketName: "fs",
  });
});


// export const uploadFile = async (request, response) => {
//   if(!request.file) {
//     return response.status(404).json("File not found") ;
//   }

//   const imageUrl = `${url}/file/${request.file.filename}` ;
//   return response.status(200).json(imageUrl) ;
// }

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json("No file");
    }

    if (!gridFsBucket) {
      return res.status(500).json("GridFS not initialized");
    }

    const uploadStream = gridFsBucket.openUploadStream(req.file.originalname);

    uploadStream.end(req.file.buffer);

    uploadStream.on("finish", () => {
      const imageUrl = `${url}/file/${uploadStream.filename}`;
      return res.status(200).json({ url: imageUrl }); // ✅ IMPORTANT
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};


export const getImage = async (request, response) => {
  // try {
  //   const file = await gfs.files.findOne({ filename: request.params.filename }) ;

  //   const readStream = gridFsBucket.openDownloadStream(file._id) ;
  //   readStream.pipe(response) ;
  // } catch(error) {
  //   return response.status(500).json(error.message) ;
  // }

  try {
    if (!gridFsBucket) {
      return response.status(500).json("GridFS not initialized");
    }

    const files = await conn.db
      .collection("fs.files")
      .find({ filename: request.params.filename })
      .toArray();

    if (!files || files.length === 0) {
      return response.status(404).json("File not found");
    }

    const readStream = gridFsBucket.openDownloadStreamByName(
      request.params.filename
    );

    readStream.pipe(response);

  } catch (error) {
    return response.status(500).json(error.message);
  }
}

