import  Express  from "express";
const router= Express.Router();
import routerLogin from "./login.routes.js";
import Product from '../models/product.models.js';
import productRouter from "./products.routes.js";
import cloudinary from '../utils/cloudinary.js';
import upload from '../utils/multer.js';

router.use(Express.json('application/json'));
router.use(Express.urlencoded({extended:false}));

router.get('/',async(req,res)=>{
    const products = await Product.find().sort({
        createAt:'desc'})

     await res.render('home',{
        title:'home',
        product: products
    });
});

//formulario para agregar nuevo articulo
router.get('/alta',(req,res)=>{
    res.render('alta',{
        title:'alta'
    })
})
//formulario para utilizar el metodo post
router.post('/alta',upload.single('image'),async(req,res)=>{
    try{
        //subir la imagen a cloudinary
        const imgCloudinary= await cloudinary.uploader.upload(req.file.path);
        //crear Nuevo articulo
        let products= new Product({
            name:req.body.name,
            brand:req.body.brand,
            category:req.body.category,
            descriptionShort:req.body.descriptionShort,
            descriptionLong:req.body.descriptionLong,
            freeShipping:req.body.freeShipping,
            markdown:req.body.markdown,
            image:imgCloudinary.secure_url,
            cloudinary_id:imgCloudinary.public_id,
        });
        //guardamos articulo en mongo db
        await products.save();
        res.redirect('/dashboard');
        }catch(e){
         console.log(e)
        }
        });
        
        
router.get('/contacto',(req,res)=>{
    res.render('contacto',{
        title:'contacto'
    })
})
router.get('/nosotros',(req,res)=>{
    res.render('nosotros',{
        title:'nosotros'
    })
})

//login
router.use(routerLogin);
router.use(productRouter);

router.get('/*',(req,res)=>{
    res.render('error404',{
        title:'404'
    })
})
export default  router;