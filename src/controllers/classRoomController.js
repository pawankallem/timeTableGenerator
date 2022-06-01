const ClassRoom = require("../models/classRoomModel");
const express = require("express");
const crudController = require("./crudController");

const router = express.Router();


router.post("", crudController(ClassRoom).post);

router.get("", crudController(ClassRoom).getAll);


module.exports = router;