"use strict";

class Collection {
    constructor(model){
        this.model = model
    };

    async create (req, res)  {
        
        try {
            let itemInfo = req.body;
            let newRecord = await this.model.create(itemInfo);
            res.status(201).json(newRecord);
        }catch(e){
            console.error(`error in creating a new record for model, `);
        }
        
    };

    async read (req, res)  {
        
        try {
            if(req.params.id){
                let id = req.params.id;
                let getRecord = await this.model.findOne({where:{id:id}});
                res.status(200).json(getRecord);
            }else{
                let getRecord = await this.model.findAll();
                res.status(200).json(getRecord);
            }
            
        }catch(e){
            console.error(`error in getting a record for model, ${this.model}`);
        }
        
    };

    async update (req, res)  {
        
        try {
            let itemInfo = req.body;
            let id = req.params.id;
            let record = await this.model.findOne({where:{id:id}})
            let updateRecord = await record.update(itemInfo);
            res.status(201).json(updateRecord);
        }catch(e){
            console.error(`error in updating a record for model, ${this.model}`);
        }
        
    }

    async delete (req, res)  {
        
        try {
            let id = req.params.id;
            let deleteRecord = await this.model.delete({where:{id:id}});
            res.status(201).json(deleteRecord);
        }catch(e){
            console.error(`error in creating a new record for model, ${this.model}`);
        }
        
    };
};

module.exports = Collection;