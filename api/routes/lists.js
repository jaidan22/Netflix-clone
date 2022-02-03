const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

// CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const saveList = await newList.save();
      res.status(201).json(saveList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Not allowed");
  }
});

// DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("List Deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Not allowed");
  }
});

// GET

router.get("/", verify, async (req, res) => {
  const typeQ = req.query.type;
  const genreQ = req.query.genre;
  let list = [];

  try {
    if (typeQ) {
      if (genreQ) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQ, genre: genreQ } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQ } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
