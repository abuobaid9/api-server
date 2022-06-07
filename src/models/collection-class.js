class Collection {
    constructor(model) {
        this.model = model;
    }
    async create(obj) {
        try {
            let newObj = await this.model.create(obj);
            return newObj;
        }
        catch (e) {
            console.log("this error happen in create this model", this.model);
        }
    }
    async get(data_id) {
        let record = null;
        try {
           
            if (data_id) {
                record = await this.model.findOne({ where: { id: data_id } });
                return record;
            }
            else {
                record = await this.model.findAll();
                return record;
            }
        }
        catch (e) {
            console.log("this error happen in get model", this.model);
        }
    }
    async update(obj) {
        try {
            let record = await this.model.findOne({ where: { id: data_id } });
            let updated = await record.update(obj);
            return updated;
        }
        catch (e) {
            console.log("this error happen when updated this model", this.model);
        }
    }
    async delete(data_id){
        if(!data_id){
            throw new Error('no id provided for model ', this.model)
        }
        try{
            let deleted = await this.model.destroy({ where: { id: data_id } });
            return deleted;
        }
        catch (e) {
            console.log("this error happen in deleting this model", this.model);
        }
    }
}
module.exports = Collection;


