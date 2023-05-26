import mongoose from 'mongoose';


const Connection=()=>{
  const DB_URI=`mongodb://user:user@ac-dmr9mua-shard-00-00.h5dxgzp.mongodb.net:27017,ac-dmr9mua-shard-00-01.h5dxgzp.mongodb.net:27017,ac-dmr9mua-shard-00-02.h5dxgzp.mongodb.net:27017/?ssl=true&replicaSet=atlas-wiofvl-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
     mongoose.connect(DB_URI,{useNewUrlParser:true});
     console.log("Database connected")
  }catch(error){
    console.log('Error while connecting the database',error.message);
  }
}
export default Connection;