let mongoose = require('mongoose');

mongoose.model('Pet',new mongoose.Schema({
	name:{type:String,required:true,minlength:1,maxlength:24},
	type:{type:String,required:true,minlength:1,maxlength:24},
	description:{type:String,required:true,minlength:3,maxlength:255},
	skill_1:{type:String},
	skill_2:{type:String},
	skill_3:{type:String},
	updatedAt:{type:Date,default:Date.now},
	createdAt:{type:Date,default:Date.now}

	
},{ timestamps: true }));