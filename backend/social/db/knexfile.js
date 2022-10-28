// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      host:'postgres',//satao.db.elephantsql.com
      database: 'social',//trdkfyne
      user:     'postgres',//trdkfyne
      password: 'postgres',//VdBGT8rFCTyrNeLfwlbPLRNPHtEVhAGP
      port : 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
