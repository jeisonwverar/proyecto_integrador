import  Express  from "express";
import  Morgan  from "morgan";
import {dirname,join} from "path";
import {fileURLToPath } from "url";
const port=process.env.PORT||4040;

//uso de dirname en ECMAScript 6
const __dirname=dirname(fileURLToPath(import.meta.url));
const app= Express();

app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');
//archivos estaticos
app.use(Express.static(join(__dirname ,'public')));

app.get('/',(req,res)=>{
    res.render('home',{
        title:'home'
    })
})
app.get('/alta',(req,res)=>{
    res.render('alta',{
        title:'alta'
    })
})
app.get('/contacto',(req,res)=>{
    res.render('contacto',{
        title:'contacto'
    })
})
app.get('/nosotros',(req,res)=>{
    res.render('nosotros',{
        title:'nosotros'
    })
})
app.get('/*',(req,res)=>{
    res.render('error404',{
        title:'404'
    })
})
 //middleware
app.use(Morgan('dev'));





//SERVER
app.listen(port,()=>{
    console.log(`Server listen http://localhost:${port}`)
});
