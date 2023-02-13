import  mongoose  from 'mongoose';
mongoose.set('strictQuery',false);

const setupDB = async ()=>{
 try{
    mongoose.connect(process.env.MONGODB_URI,{dbName:"CRUD"})
    .then(()=>console.log('conectado con mogodb'))
    .catch((err)=>console.log('error en la coneccion con mongo db'))
 } catch (error) {
    return null;
 }
};

export default setupDB;