"use strict";

const express = require("express");

const carRouter = express.Router();

const { carCollection } = require("../models/index");

const validator = require("../middleware/validator");

// Get all request
carRouter.get("/car", getCar);

// Get one request
carRouter.get("/car/:id", getCar);

// Post request
carRouter.post("/car", validator, createCar);

// Update request
carRouter.put("/car/:id", validator, updateCar);

// Delete request
carRouter.delete("/car/:id", validator, deleteCar);

//////////////////////////////////////////////////////////////////////

async function createCar(req, res) {
  let newarObj = req.body;
  let createdCar = await carCollection.create(newarObj);
  console.log(createdCar);
  res.status(201).json(createdCar);
}

async function getCar(req, res) {
  if (req.params.id) {
    let getCar = await carCollection.read(req.params.id);
    res.status(200).json(getCar);
  } else {
    let getCar = await carCollection.read();
    res.status(200).json(getCar);
  }
}

async function updateCar(req, res) {
  let updatedCar = await carCollection.update(req.params.id, req.body);
  res.status(201).json(updatedCar);
}

async function deleteCar(req, res) {
  let deleletedCar = await carCollection.delete(req.params.id);
  res.status(204).json(deleletedCar);
}

module.exports = carRouter;
