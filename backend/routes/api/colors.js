const express = require("express");
//to create a new router object  with Route func.
const router = express.Router();
const uuid = require("uuid");
const colors = require("../../../data");

//GET ALL
router.get("/", (req, res) => {
  res.json(colors);
});

//GET SINGLE
//parseInt() to convert a string type "1" to number type 1.
//some() hight order method, returns true or false
router.get("/:id", (req, res) => {
  const found = colors.some((color) => color.id === parseInt(req.params.id));
  if (found) {
    res.json(colors.filter((color) => color.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No color with id of ${req.params.id}` });
  }
});

//POST / Create Member
router.post("/", (req, res) => {
  // res.send(req.body);
  const newColor = {
    id: uuid.v4(),
    color: req.body.color,
    value: req.body.value,
  };
  //check if it actually send color & value
  if (!newColor.color || !newColor.value) {
    return res.status(400).json({ msg: "Please include color & value" });
  }
  colors.push(newColor);
  res.json(colors);
});

//UPDATE color item

router.put("/:id", (req, res) => {
  const found = colors.some((color) => color.id === parseInt(req.params.id));
  if (found) {
    const updatedColor = req.body;
    console.log(updatedColor);
    colors.forEach((color) => {
      if (color.id === parseInt(req.params.id)) {
        //check if color & value has been send
        color.color = updatedColor.color ? updatedColor.color : color.color;
        color.value = updatedColor.value ? updatedColor.value : color.value;

        res.json({ msg: "Color was updated", color });
      }
    });
  } else {
    res.status(400).json({ mssg: `No color with id of ${req.params.id}` });
  }
});

//DELETE color item

router.delete("/:id", (req, res) => {
  const found = colors.some((color) => color.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "Color deleted",
      colors: colors.filter((color) => color.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ mssg: `No color with id of ${req.params.id}` });
  }
});

module.exports = router;
