const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const restaurantRouter = require("./routers/restaurant.router")
//แปลงจากtextเป็นjson
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Rest API");
});

//use router
app.use("/api/v1/restaurants" , restaurantRouter);

app.listen(PORT, () => {
  console.log("connect PORT:" + PORT);
});
