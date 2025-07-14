const Restaurant = require("../models/restaurant.model")
const restaurantController={};

//create and sacve a new restaurant
restaurantController.create = async (req,res)=>{
    const {name,type,imageUrl} = req.body;
    //validate data
    if(!name || !type || !imageUrl){
        res.status(400).send({message: "Name, Type or ImageUrl can not be empty!"});
        return
    }
    await Restaurant.findOne({ where: { name: name } }).then((restuarant) => {
      if (restuarant) {
        res.status(400).send({ message: "Restaurant already exists!" });
        return;
      }
      const newRestuarant = {
        name: name,
        type: type,
        imageUrl: imageUrl,
      };
      Restaurant.create(newRestuarant)
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "someting error creating the restaurant",
          });
        });
    });
}
   
module.exports = restaurantController;