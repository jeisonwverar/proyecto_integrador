import express from 'express';
import product from '../models/product.models.js';
const productRouter = express.Router();
import cloudinary from '../utils/cloudinary.js';
import upload from '../utils/multer.js';


productRouter.get('/dashboard', async(req,res)=>{
    const Product = await product.find().sort({createAt:'desc'});

    await res.render('dashboard',{
        title:'dashboard',
        product:new Product(),
    });
});



















export default productRouter;