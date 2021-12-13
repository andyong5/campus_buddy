var express = require("express");
const pool = require("../db");
var router = express.Router();

/* GET home page. */
function User(firstName, lastName, name, email, imageUrl) {
  this.first_name = firstName;
  this.last_name = lastName;
  this.name = name;
  this.email = email;
  this.image_url = imageUrl;
}
router.post("/", async (req, res, next) => {
  const user = new User(
    req.body.firstName,
    req.body.lastName,
    req.body.name,
    req.body.email,
    req.body.imageUrl
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
        "INSERT INTO users (firstName, lastName, email, fullName, imageUrl) VALUES ($1, $2, $3, $4, $5)",
        [
          user.firstName,
          user.lastName,
          user.email,
          user.name,
          user.imageUrl,
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
