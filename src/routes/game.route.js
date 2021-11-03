"use strict";

const express = require('express');

const gameRouter = express.Router();

const {gameCollection} = require('../models/index');

const validator = require('../middleware/validator');

// Get all request
gameRouter.get('/game', gameCollection.read);

// Get one request
gameRouter.get('/game/:id', gameCollection.read);

// Post request
gameRouter.post('/game', validator, gameCollection.create);

// Update request
gameRouter.put('/game/:id', validator, gameCollection.update);

// Delete request
gameRouter.delete('/game/:id', validator, gameCollection.delete);


module.exports = gameRouter;

