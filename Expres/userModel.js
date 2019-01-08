
var mongoose=require('mongoose');
var Users=mongoose.model('Users',{
    name:{
       type:String
    },
   age:{
       type:Number

    },
    rollno:{
        type:Number
    },
    admno:{
        type:Number
    },
    college:{
        type:String
    }


});

module.exports={Users};