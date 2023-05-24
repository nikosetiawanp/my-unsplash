const express = require("express");
const Model = require("../models/model");
const router = express.Router();

//Post Method
router.post("/images", async (req, res) => {
  const data = new Model({
    label: req.body.label,
    url: req.body.url,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/images", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/images/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);

    if (id.length !== 24 && id.length !== 12)
      throw new Error("id must be 12 or 24 characters long", {
        statusCode: 400,
      });

    if (data === null)
      throw new Error(`Data with id ${id} doesn't exist`, { statusCode: 404 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/images/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/images/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);

    if (id.length !== 24) throw new Error("Bad Request", { statusCode: 400 });
    if (data === null) throw new Error("Not Found", { statusCode: 404 });

    res.status(200).json({ message: `Document wih id ${id} has been deleted` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
