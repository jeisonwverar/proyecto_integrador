import  Express  from "express";
import  Morgan  from "morgan";
import {dirname,join} from "path";
import {fileURLToPath } from "url";
const port=process.env.PORT||4040;
import router from "./routes/index.js";
import setupDB from "./utils/db.js";
//uso de dirname en ECMAScript 6
const __dirname=dirname(fileURLToPath(import.meta.url));
const app= Express();
//dotenv
import * as dotenv from 'dotenv';
dotenv.config()
app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');
//archivos estaticos
app.use(Express.static(join(__dirname,'public')));
app.use(Express.urlencoded({extended:false}));
app.use(Express.json());

 //middleware
app.use(Morgan('dev'));
//rutas
app.use(router);


//mongo db
setupDB();

//SERVER
app.listen(port,()=>{
    console.log(`Server listen http://localhost:${port}`)
});
