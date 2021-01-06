const knex = require('knex');
const config = require('../knexfile.js');


// Select development object from knexfile.js
const db = knex(config.development);



//Export to use in codebase
module.exports = db