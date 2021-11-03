"use strict";

const express = require('express');

const carRouter = express.Router();

const {carCollection} = require('../models/index');

const validator = require('../middleware/validator');

// Get all request
carRouter.get('/car', carCollection.read);

// Get one request
carRouter.get('/car/:id', carCollection.read);

// Post request
carRouter.post('/car', validator, carCollection.create);

// Update request
carRouter.put('/car/:id', validator, carCollection.update);

// Delete request
carRouter.delete('/car/:id', validator, carCollection.delete);


module.exports = carRouter;