let UserController = require("../controllers/controllers.js");
let path= require("path");

module.exports =(app)=>{
	app.get("/api/pets",UserController.all);
	app.get("/api/pets/:id",UserController.findById);
	app.delete("/api/pets/:id",UserController.destroy);	
	app.put("/api/pets/:id",UserController.update);	
	app.post("/api/pets",UserController.create);

	app.all("*", (req,res,next) => {
  	res.sendFile(path.resolve("./angular/dist/index.html"))
});
}
