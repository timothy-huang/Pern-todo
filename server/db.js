const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "@hYN@!^56r4FSE",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;