const restaurantController = require("../controllers/restaurant.controller")

const express = require( "express")
const router = express.Router();
//POST http://localhost:5000/api/v1/restaurants
router.post("/",restaurantController.create);

module.exports = router;