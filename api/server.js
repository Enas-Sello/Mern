import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import user from './routes/user.route.js'
import review from './routes/review.route.js'
import orders from './routes/orders.route.js'
import message from './routes/message.route.js'
import gig from './routes/gig.route.js'
import conversation from './routes/conversation.route.js'
const app = express()
dotenv.config();

// Connect to the MongoDB database
const conect = async()=>{
  try { 
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB success');
  app.listen(8800,()=>{
  console.log('server run at 8800')
}) 
  }
  catch(error){
    console.error('Error connecting to MongoDB: ',error);
}
}

// route
// app.use("/api/auth" ,auth)
app.use("/api/user" ,user)
app.use("/api/review" ,review)
app.use("/api/orders" ,orders)
app.use("/api/message" ,message)
app.use("/api/gig" ,gig)
app.use("/api/conversation" ,conversation)

conect()


// // Connect to the MongoDB database
// mongoose.connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(8800,()=>{
//         console.log('server run at 8800')
//     }) 
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
// app.listen(8800,()=>{
  //     console.log('server run at 8800')
  // }) 