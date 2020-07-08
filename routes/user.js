const express = require("express");
const router = express.Router();
const users = require("./Dataset/userData");
router.get("/", (req, res) => {
  res.status(200).json(users);
});
router.get("/:itemId", (req, res) => {
  try {
    if (!users.members.some((member) => member.id === req.params.itemId)) {
      throw Error("Not Found");
    } else {
      const member = users.members.filter(
        (member) => member.id === req.params.itemId
      );

      res.status(200).json(member);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
