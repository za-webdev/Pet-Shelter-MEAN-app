let Pet = require("mongoose").model("Pet");

class UserController{
	all(req,res){
		Pet.find({},(err,pets)=>{
			if(err){
				console.log("Returned error",err);

				return res.json({message: "Error", error: err})
			}
			else{
				return res.json({message:"Success",pets:pets.reverse()});
			}
		})
	}

	create(req,res){
		console.log(req.body);
		let pet = new Pet(req.body);
		console.log(pet);
		

		pet.save((err)=>{
			if(err){
				console.log("Returned error",err);
				return res.json({message:"Error",error:err});
			}else{
				return res.json(pet);
			}
		})
	}

	update(req,res){


		console.log(req.body)
		Pet.findByIdAndUpdate(req.params.id,req.body,(err,pet)=>{
			if(err){
				return res.json({message:"Error",error:err})
			}
			else{
				return res.json(pet);
			}
		});
		
	}

	findById(req,res){
		Pet.findOne({_id:req.params.id},(err,pet)=>{
			if(err){
				console.log("Returned error",err);
				return res.json({message:"Error",error:err})
				
			}else{
				return res.json(pet);
			}
		});
	}

	destroy(req,res){
		Pet.remove({_id:req.params.id},(err)=>{
			return res.json({message:"Pet has been deleted"});
		});
	}
}

module.exports = new UserController();