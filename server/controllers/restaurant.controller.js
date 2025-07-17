const Restaurant = require("../models/restaurant.model");
const restaurantController = {};

//create and sacve a new restaurant
restaurantController.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;
  //validate data
  if (!name || !type || !imageUrl) {
    res
      .status(400)
      .send({ message: "Name, Type or ImageUrl can not be empty!" });
    return;
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
};
restaurantController.getall = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "someting error Get the restaurant",
      });
    });
};
restaurantController.getbyID = async(req,res) => {
  const id = req.params.id;
  await Restaurant.findByPk(id).then((data)=>{
    if(!data){
      res.status(404).send({message:"No found Restaurant with id:"+ id})
    }else{
      res.send(data);
    }
  })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "someting error Get the restaurant",
      })
    });
  }
  restaurantController.update = async (req,res)=>{
    const id = req.params.id;
    const {name,type,imageUrl} = req.body
    if(!name && !type && !imageUrl){
      res.t.status(400).send({message: "Name,Type,Image can not be empty!"});
      return
    }
    await Restaurant.update({name,type,imageUrl},{
      where:{id}
    }).then((num)=>{
      if(num===1){
        res.send({message:"Restaurant update successfully"})
      }else{
        res.status(404).send({message:"Cannot Update restaurant with id"+id+". Maybe restaurant was not found"})
      }
    });
  }
  restaurantController.deletebyid = async (req,res)=>{
    const id = req.params.id;
    if(!id){
      res.status(404).send({ message: "Id id missing"});
      return;
    }
    await Restaurant.destroy({where:{id}}).then((num) => {
      if(num===1){
        res.send({message:"Restaurant was deleted successfully"})
      }else{
        res.status(404).send({
          message: "can not deleted whith id:"+id
        })
      }
    }
  )
  }
module.exports = restaurantController;
