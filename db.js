const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zrutfsrmursvkm",
  password: "b949ff6dad4f30a790de83df698d3d6c78c1cfec4feb4c6836781e45ba5cbdf1",
  host: "ec2-44-192-245-97.compute-1.amazonaws.com",
  port: 5432,
  database: "dd3rvrgeopsv7o",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
