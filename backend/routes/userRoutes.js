const express = require("express");
const {
  findAllUsers,
  findUsersByHome,
} = require("../controllers/userController");
const router = express.Router();

router.get("/find-all", findAllUsers);
router.get("/find-by-home", findUsersByHome);

module.exports = router;
