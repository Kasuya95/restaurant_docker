const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express(); // ประกาศ app ก่อนใช้งาน

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// แปลงจาก text เป็น json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const restaurantRouter = require("./routers/restaurant.router");

app.get("/", (req, res) => {
  res.send("Restaurant Rest API");
});

// ใช้งาน router
app.use("/api/v1/restaurants", restaurantRouter);

app.listen(PORT, () => {
  console.log("connect PORT:" + PORT);
});
