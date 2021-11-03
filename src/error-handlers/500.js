"use strict";

module.exports= (err, req, res, next) => {
    res.status(500).json({
        error: 500,
        message: `An error occurred try again, ${err}`
    });
};