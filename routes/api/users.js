const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//@route    POST  api/users
//@desc     Register User
//@access   Public
router.post("/", (req, res) => {
  console.log(req.body);
  res.end("users route");
});

module.exports = router;
