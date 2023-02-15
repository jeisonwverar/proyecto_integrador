import multer from 'multer';
import  path  from 'path';


//multer config
export default multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        let ext = path.extname(file.originalname);
        if(ext!== '.jpg' && ext !== '.png' && ext !== '.jpeg'){
            cb( new Error ('el archivo no es permitido '),false);
            return;
        }
        cb(null,true);

    }
});