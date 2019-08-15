const express = require("express");
const router = express.Router();
require("dotenv").config();
const connection = require("../modules/dbconfig.js");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM dater", (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

router.post("/", (req, res) => {
  connection.query(
    `INSERT INTO dater VALUES (default, '${req.body.firstName}',
      '${req.body.lastName}', '${req.body.userName}', '${req.body.tasks}', 
      '${req.body.level}')`,
    err => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

router.delete("/", (req, res) => {
  connection.query(`DELETE FROM dater WHERE id=${req.body.id}`, err => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

router.patch("/", (req, res) => {
  connection.query(
    `UPDATE dater SET first_name='${req.body.firstName}', 
    last_name='${req.body.lastName}',
    user_name='${req.body.userName}',
    tasks='${req.body.tasks}',
    level='${req.body.level}' WHERE id=${req.body.id}`,
    err => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

module.exports = router;
