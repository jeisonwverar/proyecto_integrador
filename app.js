import  Express  from "express";
import morgan from "morgan";
import  Morgan  from "morgan";
import {dirname,join} from "path";
//import {fileURLToPath } from "url";
//import indexRoutes from "./routes/index-router.js";

const app= Express();
const port=process.env.PORT||4040;
 //middleware
app.use(Morgan('dev'));

















//SERVER
app.listen(port,()=>{
    console.log(`Server listen http://localhost:${port}`)
});
