import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;

dotenv.config() ;

const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;


const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-j0jbb46-shard-00-00.s7wksma.mongodb.net:27017,ac-j0jbb46-shard-00-01.s7wksma.mongodb.net:27017,ac-j0jbb46-shard-00-02.s7wksma.mongodb.net:27017/?ssl=true&replicaSet=atlas-ot91z2-shard-0&authSource=admin&appName=clone-whatsapp` ;
  try{
    await mongoose.connect(URL) ;
    console.log("MongoDB connected successfully!!") ;
  } catch(error) {
    console.log("MongoDB connection failed!! "+error.message) ;   
  }
}

export default Connection ;


