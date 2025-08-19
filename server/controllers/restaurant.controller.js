const Restaurant = require("../models/restaurant.model");
const restaurantController = {};

// Create and save a new restaurant
restaurantController.create = async (req, res) => {
  try {
    const { name, type, imageUrl } = req.body;

    // validate data
    if (!name || !type || !imageUrl) {
      return res
        .status(400)
        .send({ message: "Name, Type or ImageUrl can not be empty!" });
    }

    // check duplicate
    const restaurant = await Restaurant.findOne({ where: { name } });
    if (restaurant) {
      return res.status(400).send({ message: "Restaurant already exists!" });
    }

    // create new restaurant
    const newRestaurant = await Restaurant.create({ name, type, imageUrl });
    return res.status(201).send(newRestaurant);

  } catch (error) {
    console.error("Create Restaurant Error:", error);
    return res.status(500).send({
      message: error.message || "Something error while creating the restaurant",
    });
  }
};

restaurantController.getAll = async (req, res) => {
  try {
    const rest = await Restaurant.findAll();
    res.send(rest);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something error while getting all restaurant",
    });
  }
};

restaurantController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Restaurant.findByPk(id);
    if (!data) {
      return res
        .status(404)
        .send({ message: `No Found Restaurant with id ${id}` });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something error while getting restaurant with id",
    });
  }
};

restaurantController.update = async (req, res) => {
  try {
    const { name, type, imageUrl } = req.body;
    const { id } = req.params;

    // validate data
    if (!name && !type && !imageUrl) {
      return res
        .status(400)
        .json({ message: `Name, Type, ImageUrl can not be empty!` });
    }

    const [updated] = await Restaurant.update(
      { name, type, imageUrl },
      { where: { id } }
    );

    if (updated === 1) {
      res.send({ message: `Restaurant updated successfully!` });
    } else {
      res.status(404).send({
        message: `Cannot update restaurant with id ${id}. Maybe restaurant was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Server Error",
    });
  }
};

restaurantController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({ message: `Id is missing` });
    }

    const deleted = await Restaurant.destroy({ where: { id } });

    if (deleted === 1) {
      res.send({ message: `Restaurant was deleted successfully.` });
    } else {
      res.status(404).send({
        message: `Cannot delete restaurant with id ${id}. Maybe restaurant was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Server Error",
    });
  }
};

module.exports = restaurantController;
