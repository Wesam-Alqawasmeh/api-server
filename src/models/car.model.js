"use strict";

const carShema = (sequelize, DataTypes) => sequelize.define('cars', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    buildingYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = carShema;