
exports.up = function(knex) {
  return knex.schema.createTable( 'users', tbl =>{
      tbl.increments();
      tbl.text('name', 128).unique().notNullable()
      tbl.boolean('subbed?');
  })
};

exports.down = function(knex) {
  
};
