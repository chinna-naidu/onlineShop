const Knex = require("knex");
const KnexConfig = require("./knexfile");

module.exports = Knex(KnexConfig.development);
