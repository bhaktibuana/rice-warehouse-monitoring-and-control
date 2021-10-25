const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('./model/dbConnection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { sendConfirmationEmail } = require('./services/emailServices');
const crypto = require('crypto');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.json({
    message: 'Rice Warehouse Monitoring and Control API'
  });
  console.log(req.headers);
});

app.get('/api/get_state', (req, res) => {
  const sqlQuery = "SELECT * FROM state";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.put('/api/put_state_automatic', (req, res) => {
  const t1 = req.body.state_temperature1;
  const h1 = req.body.state_humidity1;
  const rm1 = req.body.state_relaymotor1;
  const rh1 = req.body.state_relayhumidifier1;
  const t2 = req.body.state_temperature2;
  const h2 = req.body.state_humidity2;
  const rm2 = req.body.state_relaymotor2;
  const rh2 = req.body.state_relayhumidifier2;

  const sqlQuery = "UPDATE state SET state_temperature1 = ?, state_humidity1 = ?, state_relaymotor1 = ?, state_relayhumidifier1 = ?, state_temperature2 = ?, state_humidity2 = ?, state_relaymotor2 = ?, state_relayhumidifier2 = ? WHERE state_id = 1";

  db.query(sqlQuery, [t1, h1, rm1, rh1, t2, h2, rm2, rh2], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(3001, () => {
  console.log('listening on port 3001!');
});