import  Express  from "express";
const routerLogin= Express.Router();

import User from '../models/user.models.js'


routerLogin.get('/login',(req,res)=>{
    res.render('login',{
        title:'login'
    })
})
routerLogin.post('/login',(req,res,next)=>{
    console.log(req.body)
    res.send('recibido')
})
routerLogin.get('/new',(req,res)=>{
    res.render('login-new',{
        title:'New'
    })
})

routerLogin.post('/new',(req,res,next)=>{
   console.log(req.body)
   res.send('recibido')
})

/* routerLogin.post('/new',(req,res)=>{
    const{username, password}=req.body;

    const user = new User({username, password});

    user.save(err=>{
        if(err){
            res.status(500).send('Error al registrar al usuario')
        }else{
            res.status(200).send('registro completo')
            
        }
    });
}) */

/* routerLogin.post('/login',(req,res)=>{
    const{username, password}=req.body;
    User.findOne({username},(err,user)=>{
        if(err){
            res.status(500).send('Error al registrar al usuario')
        }else if(!user){
            res.status(500).send('El usuario no exite')
        }else{
            user.isCorrectPassword(password,
                (err,result)=>{
                if(err){
                    res.status(500).send('Error al autenticar')
                }else if(result){
                    res.status(200).send('Usuario autenticado')
                    
                }else{
                    res.status(500).send('usuario o contraseña incorrecta')
                }
            });
        }
    });
}); */


export default routerLogin;