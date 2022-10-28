const {Model} = require('objection')

class User extends Model{
    static get tableName(){
        return 'user'
    }

    static get relationMappings(){

        const Tenant = require('./tenant')

        return {
            tenant: {
              relation: Model.HasOneRelation,
              // The related model. This can be either a Model
              // subclass constructor or an absolute file path
              // to a module that exports one. We use a model
              // subclass constructor `Animal` here.
              modelClass: Tenant,
              join: {
                from: 'user.tenant_id',
                to: 'tenant.id'
              }
            }
        }

    }
}

module.exports = User;