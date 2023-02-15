import  Express  from "express";
import  Morgan  from "morgan";
import {dirname,join} from "path";
import {fileURLToPath } from "url";
const port=process.env.PORT||4040;
import router from "./routes/index.js";
import setupDB from "./utils/db.js";
import cors from 'cors';
import  methodOverride from 'method-override';

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



 //middleware
app.use(Morgan('dev'));
app.use(cors());
app.use(methodOverride('_method'));
//rutas
app.use(router);


//mongo db
setupDB();

//SERVER
app.listen(port,()=>{
    console.log(`Server listen http://localhost:${port}`)
});
