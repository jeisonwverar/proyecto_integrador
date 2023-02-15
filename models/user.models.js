import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds=10;



const userSchema =new mongoose.Schema(
    {
    username:{type:String, require:true,unique:true},
    password:{type:String,require:true}
    },
   {
    
    timestamps:true

   }
);

userSchema.pre('save',function(next){
    if(this.isNew||this.isModified('password')){

        const doc = this;

         return bcrypt.hash(doc.password,saltRounds,(err,hashedPassword)=>{
            if(err){
              return  next(err);
            }else{
                doc.password = hashedPassword;
              return  next();
            }
        });
    }else{
        next();
    };
});
userSchema.methods.isCorrectPassword = function(password,cb){
    bcrypt.compare(password,this.password,function(err,same){
        if(err){
          return  cb(err);
        }
           return cb(null,same);
        
    });
};


export default mongoose.model('User',userSchema);