import express from 'express';
import Product from '../models/product.models.js';
const productRouter = express.Router();
import cloudinary from '../utils/cloudinary.js';
productRouter.use(express.json());
productRouter.use(express.urlencoded({extended: false}));


//delete
productRouter.get(':/slug',async(req,res)=>{
    const product = await Product.findOne({slug:req.params.slug})
    if(product===null)res.redirect('/')
    res.render("/dashboard", { product: product});
   
   });


productRouter.get('/dashboard',async (req,res)=>{
    const products = await Product.find().sort({
        createAt:'desc'})

     await res.render('dashboard',{
        title:'dashboard',
        product: products
    });
});

//delete
   productRouter.delete('/:id',async (req,res)=>{
    try{
        let productId = await Product.findById(req.params.id);
        //eliminamos de cloudinary
        await cloudinary.uploader.destroy(productId.cloudinary_id);
        //eliminar de mongo
        await productId.remove();
        res.redirect('/');
    }catch(err){console.log(err)}
})















export default productRouter;