require("dotenv").config();
const express = require("express");
const route = express.Router();

const mongoose = require("mongoose");
const formSchema = require("./model");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATA_URL);
const connect = mongoose.connection;

connect.on("open", () => {
  console.log("Connected");
});

route.get("/infos", async (req, res) => {
  try {
    const data = await formSchema.find({});
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
route.post("/infos", async (req, res) => {
  try {
    const newForm = await new formSchema({
      service: req.body.service,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      price: req.body.price,
    });
    await newForm.save();
    res.json(newForm);
  } catch (e) {
    console.log(e);
  }
});
module.exports = route;
