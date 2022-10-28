const {Model} = require('objection')

class MSG extends Model{
    static get tableName(){
        return 'message'
    }
}

module.exports = MSG;