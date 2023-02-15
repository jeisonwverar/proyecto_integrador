import mongoose from "mongoose";
import {marked}from 'marked';
import slugify from 'slugify';
import {JSDOM}  from 'jsdom';
import createDomPurify from 'dompurify';

const  dompurify = createDomPurify(new JSDOM().window);

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
     },
     brand:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
     descriptionShort:{
        type:String
    },
    descriptionLong:{
        type:String
    },
    freeShipping:{
        type:Boolean
    },
    age:{
        type:String
    },
     price:{
         type:Number,
         
     },
     image:{
         type:String
     },
     markdown:{
        type:String
     },
     cloudinary_id:{
         type:String,
         require:true
     },
     createAt:{
         type:Date,
         default:Date.now
     },
     slug:{
         type:String,
         require:true,
         unique:true
     },
     sanitizedHTML:{
         type:String,
         require:true
     }
 
});

productSchema.pre('validate',function(next){
    if(this.name){
        this.slug=slugify(this.name,{lower:true, strict:true})
    }
    if(this.markdown){
        this.sanitizedHTML = dompurify.sanitize(marked(this.markdown))
    }
    next();
})

export default mongoose.model('product',productSchema);