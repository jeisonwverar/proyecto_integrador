import  Express  from "express";
const routerLogin= Express.Router();
 
routerLogin.get('/login',(req,res)=>{
    res.render('login',{
        title:'login'
    })
})
routerLogin.get('/new',(req,res)=>{
    res.render('login-new',{
        title:'New'
    })
})



export default routerLogin;