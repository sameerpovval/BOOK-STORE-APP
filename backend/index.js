import  express  from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import route from "./bookRouter/routes.js"
import cors from 'cors'

const app = express();

// middleware for farsing request

app.use(express.json());

app.use(cors())




app.get('/', (req,res)=>{
   console.log(req);
   return res.status(234).send('hello world');
   
})

app.use('/books', route);









mongoose.connect(mongoDBURL)
.then(()=>{
   console.log('app is connected to database');
   app.listen(PORT,()=>{
    console.log(`app is listening the port:${PORT}`)
});
})

.catch((error)=>{
 console.log(error);
})


