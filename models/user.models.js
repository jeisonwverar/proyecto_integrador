import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds=10;



const userSchema =new mongoose.Schema(
    {
    username:{type:String, require:true,unique:true},
    password:{type:String,require:true}
    },
   {
    versionKey:false,
    timestamps:true

   }
);

userSchema.pre('save',function(next){
    if(this.isNew||this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password,saltRounds,(err,hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

userSchema.method.isCorrectPassword = function(password,callback){
    bcrypt.compare(password,this.password,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
};

export default mongoose.model('User',userSchema);