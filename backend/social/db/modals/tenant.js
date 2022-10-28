const {Model} = require('objection')

class Tenant extends Model{
    static get tableName(){
        return 'tenant'
    }
}

module.exports = Tenant;