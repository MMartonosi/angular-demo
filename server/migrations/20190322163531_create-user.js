
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', table => {
      table.increments();
      table.text('fullName');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
  };
  
