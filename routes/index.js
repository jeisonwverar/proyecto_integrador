import  Express  from "express";
const router= Express.Router();
import routerLogin from "./login.routes.js";
import Product from '../models/product.models.js';
import productRouter from "./products.routes.js";
import cloudinary from '../utils/cloudinary.js';
import upload from '../utils/multer.js';
import  path  from "path";
router.use(Express.json());
router.use(Express.urlencoded({extended:false}));

router.get('/',(req,res)=>{
    res.render('home',{
        title:'home',
        product: new Product(),
    })
})
router.get('/alta',(req,res)=>{
    res.render('alta',{
        title:'alta'
    })
})
router.post('/alta',upload.single('image'),async(req,res)=>{
    try{
        //subir la imagen a cloudinary
        const imgCloudinary= await cloudinary.uploader.upload(req.file.path);
        //crear Nuevo articulo
        let products= new Product({
            name:req.body.name,
            descriptionShort:req.body.descriptionShort,
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