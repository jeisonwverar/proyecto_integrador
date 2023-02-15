import  Express  from "express";
const router= Express.Router();
import routerLogin from "./login.routes.js";
router.use(Express.json());
router.use(Express.urlencoded({extended:false}));

router.get('/',(req,res)=>{
    res.render('home',{
        title:'home'
    })
})
router.get('/alta',(req,res)=>{
    res.render('alta',{
        title:'alta'
    })
})
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
router.use(routerLogin)

router.get('/*',(req,res)=>{
    res.render('error404',{
        title:'404'
    })
})
export default  router;