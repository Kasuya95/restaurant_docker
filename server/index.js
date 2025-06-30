const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
//แปลงจากtextเป็นjson
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Rest API");
});

app.listen(PORT, () => {
  console.log("connect PORT:" + PORT);
});
