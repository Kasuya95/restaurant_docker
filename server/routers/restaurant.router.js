const restaurantController = require("../controllers/restaurant.controller");

const express = require("express");
const router = express.Router();
//POST http://localhost:5000/api/v1/restaurants
router.post("/", restaurantController.create);

//Getall http://localhost:5000/api/v1/restaurants
router.get("/", restaurantController.getall);

//Get by id http://localhost:5000/api/v1/restaurants/:id
router.get("/:id", restaurantController.getbyID);

//PuT by id http://localhost:5000/api/v1/restaurants/:id
router.put("/:id", restaurantController.update);

router.delete("/:id", restaurantController.deletebyid);


module.exports = router;
