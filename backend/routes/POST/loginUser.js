var express = require("express");
const pool = require("../db");
var router = express.Router();

/* GET home page. */
function User(first_name, last_name, name, email, image_url) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.name = name;
  this.email = email;
  this.image_url = image_url;
}
router.post("/", async (req, res, next) => {
  const user = new User(
    req.body.first_name,
    req.body.last_name,
    req.body.name,
    req.body.email,
    req.body.image_url
  );
  var already_user = false;
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send({ message: err.stack });
      return console.error("Error acquiring client", err.stack);
    }
    client.query(
      "SELECT * FROM users where email = $1",
      [user.email],
      (err, result) => {
        if (err) {
          return console.error("Error executing query", err.stack);
        }
        if (result.rowCount !== 0) {
          release();
          already_user = true;
          res.status(200).json(result.rows[0]);
        }
      }
    );
    if (already_user) {
      client.query(
        "INSERT INTO users (first_name, last_name, email, full_name, image_url) VALUES ($1, $2, $3, $4, $5)",
        [
          user.first_name,
          user.last_name,
          user.email,
          user.name,
          user.image_url,
        ],
        (err, result) => {
          release();
          if (err) {
            return console.error("Error executing query", err.stack);
          }
          console.log(result.rows[0]);
          res.json("Successfully added user to database!");
        }
      );
    }
  });
});

module.exports = router;
