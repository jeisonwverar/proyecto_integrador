import  Express  from "express";
const routerLogin= Express.Router();
import User from "../models/user.models.js"


routerLogin.use(Express.json('application/json'));
routerLogin.use(Express.urlencoded({extended: false}));

routerLogin.get('/login',(req,res)=>{
    res.render('login',{
        title:'login'
    })
})
/* routerLogin.post('/login',(req,res,next)=>{
    console.log(req.body)
    res.send('recibido')
}) */
routerLogin.get('/new',(req,res)=>{
    res.render('login-new',{
        title:'New'
    })
})

/* routerLogin.post('/new',(req,res,next)=>{
   console.log(req.body)
   res.send('recibido')
   next()
}) */

routerLogin.post('/new',(req,res)=>{
    const{username, password}=req.body;

    const user = new User({username, password});

    user.save(err=>{
        if(err){
            res.status(500).send('Error al registrar al usuario')
        }else{
              res.status(200).send('registro completo')
             
            
        }
    });
})

routerLogin.post('/login',(req,res)=>{
    const{username, password}=req.body;
    console.log(req.body)
      User.findOne({username},(err,user)=>{
        if(err){
            res.status(500).send('Error al ingresar usuario')
        }else if(!user){
            res.status(500).send('El usuario no exite')
        }else{
           user.isCorrectPassword (password,(err,result)=>{
                console.log( password === result)
                console.log(result,err)
                if(err){
                   res.status(500).send('Error al autenticar');
                }else if(result){
                    res.status(200).res.send('usuario autenticado');
                    
                }else{
                    res.status(500).send('usuario y/o contraseña incorrecta')
                }
            });
        }
    });
});


export default routerLogin;