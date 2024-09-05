const express = require("express");
const {
  findHomesByUser,
  updateHomeUsers,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/find-by-user", findHomesByUser);
router.put("/update-users", updateHomeUsers);

module.exports = router;
