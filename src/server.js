"use strict";

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const carRouter = require('./routes/car.route');
const gameRouter = require('./routes/game.route');

const pathNotFound = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const logger = require('./middleware/logger');

app.use(express.json()); 
app.use(logger);

app.use(carRouter);
app.use(gameRouter);

app.get('/', (req, res) => {
    res.status(200).send('Server is working well');
});

app.use('*', pathNotFound);
app.use(errorHandler);

function start(){
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
};


module.exports = {
    server: app,
    start: start
}
