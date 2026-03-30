


import multer from 'multer' ;
import { GridFsStorage } from 'multer-gridfs-storage' ;
import dotenv from 'dotenv' ;

dotenv.config() ;

const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;


const storage = GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-j0jbb46-shard-00-00.s7wksma.mongodb.net:27017,ac-j0jbb46-shard-00-01.s7wksma.mongodb.net:27017,ac-j0jbb46-shard-00-02.s7wksma.mongodb.net:27017/?ssl=true&replicaSet=atlas-ot91z2-shard-0&authSource=admin&appName=clone-whatsapp`,
  options: { useUnifiedTopology: true, useNewUrlParser: true } ,
  file: (request, file) => {
    const match = ["image/png", "image/.jpg"] ;

    if(match.indexOf(file.mimeType) == -1) {
      return `${Date.now()}-file-${file.originalname}` ;
    }

    return {
      bucketName: 'photos',
      fileName: `${Date.now()}-file-${file.originalname}`
    }
  }
}) ;


export default multer({ storage }) ;

