"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    
    try {
      let newRecord = await this.model.create(obj);
      return newRecord.dataValues;
    } catch (e) {
      console.error(`error in creating a new record for model, ${this.model}`);
    }
  }

  async read(id) {
    try {
      if (id) {
        let getRecord = await this.model.findOne({ where: { id: id } });
        return getRecord;
      } else {
        let getRecord = await this.model.findAll();
        return getRecord;
      }
    } catch (e) {
      console.error(`error in getting a record for model, ${this.model}`);
    }
  }

  async update(id, obj) {
    try {
      let record = await this.model.findOne({ where: { id: id } });
      let updateRecord = await record.update(obj);
      return updateRecord;
    } catch (e) {
      console.error(`error in updating a record for model, ${this.model}`);
    }
  }

  async delete(id) {
    try {
      let deleteRecord = await this.model.destroy({ where: { id: id } });
      return deleteRecord;
    } catch (e) {
      console.error(`error in creating a new record for model, ${this.model}`);
    }
  }
}

module.exports = Collection;
