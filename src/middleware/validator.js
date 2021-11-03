"use strict";

function validator(req, res, next){
    if((! req.body) && (req.method === "POST" || req.method === "PUT")){
        throw new Error("bad request ! you need to pass body json correctly");
    };

    if((! req.params) && (req.method === "DELETE" || req.method === "PUT")){
        throw new Error("bad request ! you need to pass id correctly");
    };

    next();
};

module.exports= validator;