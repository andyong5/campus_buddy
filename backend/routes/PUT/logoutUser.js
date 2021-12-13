var express = require("express");
const pool = require("../db");
var router = express.Router();

/* GET home page. */
router.put("/", async (req, res, next) => {
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send({ message: err.stack });
      return console.error("Error acquiring client", err.stack);
    }
    client.query(
      "SELECT * FROM users where email = $1",
      [],
      (err, result) => {
        if (err) {
          return console.error("Error executing query", err.stack);
        }
        if (result.rowCount !== 0) {
          release();
          res.json("User already in database.");
        }
      }
    );
  });
});

module.exports = router;
