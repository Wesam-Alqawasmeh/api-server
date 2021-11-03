"use strict";

const express = require('express');

const gameRouter = express.Router();

const {gameCollection} = require('../models/index');

const validator = require('../middleware/validator');

// Get all request
gameRouter.get('/game', getGame);

// Get one request
gameRouter.get('/game/:id', getGame);

// Post request
gameRouter.post('/game', validator, createGame);

// Update request
gameRouter.put('/game/:id', validator, updateGame);

// Delete request
gameRouter.delete('/game/:id', validator, deleteGame);


/////////////////////////////////////////////////////////////////////////////


async function createGame(req, res) {
    let newGameObj = req.body;
    let createdGame = await gameCollection.create(newGameObj);
    res.status(201).json(createdGame);
  }
  
  async function getGame(req, res) {
    if (req.params.id) {
      let getGame = await gameCollection.read(req.params.id);
      res.status(200).json(getGame);
    } else {
      let getGame = await gameCollection.read();
      res.status(200).json(getGame);
    }
  }
  
  async function updateGame(req, res) {
    let updatedGame = await gameCollection.update(req.params.id, req.body);
    res.status(201).json(updatedGame);
  }
  
  async function deleteGame(req, res) {
    let deleletedGame = await gameCollection.delete(req.params.id);
    res.status(204).json(deleletedGame);
  }


module.exports = gameRouter;

