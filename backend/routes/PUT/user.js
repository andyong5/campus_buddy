var express = require("express");
const pool = require("../db");
var router = express.Router();

/* GET users listing. */

router.put("/", async (req, res, next) => {
  const email = req.body.email;
  console.log(email)
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send({ message: err.stack });
      return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT * FROM users where email = $1", [email], (err, result) => {
      if (err) {
        return console.error("Error executing query", err.stack);
      }
      if (result.rowCount !== 0) {
        release();
        res.json(result.rows[0]);
      }
    });
  });
});

module.exports = router;
