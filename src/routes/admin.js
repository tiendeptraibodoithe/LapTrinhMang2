const path = require("path");

const adminController = require("../controllers/admin");

const express = require("express");

const router = express.Router();

const products = [];
const tours = [];

router.post("/add-tour", adminController.createTour);

router.get("/add-tour", adminController.getAddTour);

module.exports = router;
