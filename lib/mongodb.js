import mongoose from "mongoose"; 
export const connectMongodb=async()=>{
try{
  await mongoose.connect("mongodb://localhost:27017/bookstore")
  console.log("Mongodb connected")
}
catch(error){
console.log("Failed to fetch the error")
}
}