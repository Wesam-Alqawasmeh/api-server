"use strict";

module.exports= (req, res, next) => {
    res.status(404).json({
        error: 404,
        message: `ERROR !! WRONG PATH PAGE NOT FOUND`
    })
};