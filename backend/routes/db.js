const pg = require("pg");

// const url = "postgres://postgres@localhost:5432/campus_buddy";
// const pool = new pg.Pool({
//   connectionString: url,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const url = "postgres://postgres@localhost:5432/campus_buddy";
const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'campus_buddy',
  user: 'postgres',
  password: 'kingandy1'
});

module.exports = pool;
