/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('tenant', (table) => {
        table.increments();
        table.string('tanant_name').notNullable();
        table.json('address');
        table.string('city');
        table.string('state');
        table.string('country');
        table.string("zip_code");
        table.string('phone');
        table.string('web_url');
        table.timestamps(true, true);
    }).createTable('user', (table) => {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name');
        table.string('department');
        table.string('designation')
        table.integer('tanant_id').references('id').inTable('tenant')
        table.string('image_url');
        table.string('city');
        table.string('country');
        table.string('bio');
        table.json('social_links');
        table.timestamps(true, true);
    }).createTable('message',(table)=>{
        table.increments();
        table.string('msg');
        table.timestamps(true,true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tenant')
        .dropTableIfExists('user');
};
