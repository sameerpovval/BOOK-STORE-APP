// import express from 'express';
// import { book } from '../models/bookModel.js';

// const router = express.Router()


// router.post('/',async(req,res)=>{
//     try{
//        if(
//           !req.body.title||
//           !req.body.author||
//           !req.body.publishYear
//        ){
//           return res.status(400).send({
//              message:'send all required fields: title,author,publishYear'
//           })
 
//        }
 
//        const newBook = {
//           title:req.body.title,
//           author:req.body.author,
//           publishYear:req.body.publishYear
//        }
//        const newBookInstance = await book.create(newBook);
 
//        return res.status(201).send(newBookInstance)
 
//     }catch(error){
//        console.log(error.message);
//        res.status(500).send({message:error.message})
//     }
//  })
 
 
//  router.get('/',async (req,res)=>{
//      try{
         
//        const books = await book.find({})
 
//        return res.status(200).json({
//           count:books.length,
//           data:books
//        })
 
 
//      }catch(error){
//        console.log(error.message);
//        res.status(500).send({message:error.message})
//      }
//  })
 
 
//  router.get('/:id',async (req,res)=>{
//     try{
//         const {id} = req.params;
//       const foundBook = await book.findById(id)
 
//       return res.status(200).json(foundBook)
 
 
//     }catch(error){
//       console.log(error.message);
//       res.status(500).send({message:error.message})
//     }
//  })
 
//  router.put('/:id', async(req,res)=>{
//     try{
 
//        if(
//           !req.body.title||
//           !req.body.author||
//           !req.body.publishYear
//        ){
//           return res.status(400).send({
//              message:'send all required fields: title,author,publishYear'
//           })
 
//        }
 
//        const {id}= req.params;
//        const result = await book.findByIdAndUpdate(id,req.body);
 
//        if(!result){
//           return res.status(404).json({message:"book not found"})
//        }return res.status(200).send({message:'book update successfully'})
 
//     }catch(error){
//        console.log(error.message);
//        res.status(500).send({message:error.message})
//     }
//  })
 
 
 
//  router
//  .delete('/:id',async (req,res)=>{
//     try{
        
//      const {id} = req.params;
//      const result = await book.findByIdAndDelete(id);
 
//      if(!result){
//        return res.status(404).json({message:"book not found"})
//      }res.status(200).send({message:"book deleted successfully"})
 
//     }catch(error){
//       console.log(error.message);
//       res.status(500).send({message:error.message})
//     }
//  })
 
//  export default router;

import express from 'express';
import { book } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: 'Please provide all required fields: title, author, publishYear' });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const newBookInstance = await book.create(newBook);

        return res.status(201).json({ message: 'Book created successfully', data: newBookInstance });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await book.find({});

        return res.status(200).json({ count: books.length, data: books });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const foundBook = await book.findById(id);

        if (!foundBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json(foundBook);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: 'Please provide all required fields: title, author, publishYear' });
        }

        const { id } = req.params;
        const result = await book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
