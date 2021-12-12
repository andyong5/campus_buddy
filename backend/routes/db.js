const pg = require("pg");

const url = "postgres://postgres:kingandy1@localhost:5432/campus_buddy";
const pool = new pg.Pool({
  connectionString: url,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
