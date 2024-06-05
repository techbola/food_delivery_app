import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(422).json({ error: "Please upload an image" });
  }

  let image_filename = `${req.file.filename}`;

  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const food = new foodModel({
      name,
      description,
      price,
      image: image_filename,
      category,
    });
    await food.save();
    res
      .status(201)
      .json({ success: true, message: "Food item added successfully" }); // 201 = created
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// get food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);

    res
      .status(200)
      .json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// get one food item
const getFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }
    res.status(200).json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood, getFood };
