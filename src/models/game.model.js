"use strict";

const gameSchema = (sequelize, DataTypes) => sequelize.define('games', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = gameSchema;