const Classes = require("../models/classModel");
const express = require("express");
const crudController = require("./crudController");

const router = express.Router();

router.post("", crudController(Classes).post);

router.get("", crudController(Classes).getAll);

module.exports = router;