const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('./model/dbConnection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { sendConfirmationEmail } = require('./services/emailServices');
const { sendApplyEmail } = require('./services/emailEmployee');
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

// get available email from "users"
app.get('/api/get_available_users/:users_email', (req, res) => {
  const usersEmail = req.params.users_email;

  const sqlQuery = "SELECT users_email FROM users WHERE users_email = ?";
  db.query(sqlQuery, usersEmail, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      // console.log(result);
    }
  });
});

// signup
app.post('/api/signup', (req, res) => {
  const usersObject = {
    usersName: req.body.usersName,
    usersEmail: req.body.usersEmail,
    usersPassword: crypto.createHash('sha256').update(req.body.usersPassword).digest('hex'),
    usersRole: 'visitor',
    usersVerify: 'unverified'
  };

  const sqlQuery = "INSERT INTO users (users_name, users_email, users_password, users_role, users_verify) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlQuery, [
    usersObject.usersName,
    usersObject.usersEmail,
    usersObject.usersPassword,
    usersObject.usersRole,
    usersObject.usersVerify
  ], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);

      sendConfirmationEmail(usersObject)
        .then((result) => console.log('Email sent...', result))
        .catch((error) => console.log(error.message));
    }
  });
});

// verify account
app.get('/verify/:token', (req, res) => {
  const token = req.params.token;

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.json({
        auth: false,
        message: "Failed to verify."
      });
    } else {
      const sqlQueryCheck = "SELECT users_verify FROM users WHERE users_email = ?";
      db.query(sqlQueryCheck, decoded.users_email, (err, result) => {
        if (result[0].users_verify == "verified") {
          res.send("The verification link has expired!");
        } else {
          const sqlQuery = "UPDATE users SET users_verify = 'verified' WHERE users_email = ?";
          db.query(sqlQuery, decoded.users_email, (err, result) => {
            res.send("Your account has been successfully verified!");
            console.log(result);
          });
        }
      });
    }
  });
});

// signin
app.post('/api/signin', (req, res) => {
  const usersEmail = req.body.usersEmail;
  const usersPassword = crypto.createHash('sha256').update(req.body.usersPassword).digest('hex');

  const sqlQuery = "SELECT * FROM users WHERE users_email = ?";
  db.query(sqlQuery, usersEmail, (err, result) => {
    if (result.length > 0) {
      const usersId = result[0].users_id;
      const usersName = result[0].users_name;
      const usersEmail = result[0].users_email;
      const usersRole = result[0].users_role;
      const usersVerify = result[0].users_verify;

      if (result[0].users_password === usersPassword) {
        if (usersVerify === "verified") {
          const token = jwt.sign({
            users_id: usersId,
            users_name: usersName,
            users_email: usersEmail,
            users_role: usersRole
          }, process.env.JWT_SECRET_KEY);

          res.json({
            auth: true,
            token: token
          });
        } else {
          res.json({
            auth: false,
            message: "Account not verified yet. Please check your email to verify!"
          });
        }
      } else {
        res.json({
          auth: false,
          message: "Wrong email/password combination."
        });
      }
    } else {
      res.json({
        auth: false,
        message: "Email address is not registered."
      })
    }
  });
});

// authenticate JWT after login
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("No token received.");
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Failed to authenticate." });
      } else {
        res.send(decoded);
        next();
      }
    });
  }
};

app.get('/api/user_authentication', verifyJWT, (req, res) => {
  res.send("You are authenticate!");
});

// update user name
app.put('/api/update_name', (req, res) => {
  const usersName = req.body.usersName;
  const usersEmail = req.body.usersEmail;

  const sqlQuery = "UPDATE users SET users_name = ? WHERE users_email = ?";
  db.query(sqlQuery, [usersName, usersEmail], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// update user password
app.put('/api/update_password', (req, res) => {
  const usersEmail = req.body.usersEmail;
  const usersPassword = crypto.createHash('sha256').update(req.body.usersPassword).digest('hex');

  const sqlQuery = "UPDATE users SET users_password = ? WHERE users_email = ?";
  db.query(sqlQuery, [usersPassword, usersEmail], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// apply email employee
app.post('/api/get_supervisor', (req, res) => {
  const usersName = req.body.usersName;
  const usersEmail = req.body.usersEmail;

  const sqlQuery = "SELECT users_email, users_name FROM users WHERE users_role = 'supervisor'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);

      const verifyObj = {
        supervisorName: result[0].users_name,
        supervisorEmail: result[0].users_email,
        usersName: usersName,
        usersEmail: usersEmail
      };

      sendApplyEmail(verifyObj)
        .then((result) => console.log('Email sent...', result))
        .catch((error) => console.log(error.message));
    }
  });
});

// get user role
app.post('/api/user_role', (req, res) => {
  const usersEmail = req.body.usersEmail;

  const sqlQuery = "SELECT users_role FROM users WHERE users_email = ?";
  db.query(sqlQuery, usersEmail, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// verify employee
app.get('/apply/:token', (req, res) => {
  const token = req.params.token;

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.json({
        accept: false,
        message: "Failed to accept."
      });
    } else {
      const sqlQueryCheck = "SELECT users_role FROM users WHERE users_email = ?";
      db.query(sqlQueryCheck, decoded.users_email, (err, result) => {
        if (result[0].users_role == "employee") {
          res.send("The application link has expired!");
        } else {
          const sqlQuery = "UPDATE users SET users_role = 'employee' WHERE users_email = ?";
          db.query(sqlQuery, decoded.users_email, (err, result) => {
            res.send(`Thank you. ${decoded.users_name}(${decoded.users_email}) is now an employee!`);
            console.log(result);
          });
        }
      });
    }
  });
});

app.get('/api/get_state', (req, res) => {
  const sqlQuery = "SELECT * FROM state";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
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

app.put('/api/put_state_manual', (req, res) => {
  const t1 = req.body.state_temperature1;
  const h1 = req.body.state_humidity1;
  const t2 = req.body.state_temperature2;
  const h2 = req.body.state_humidity2;

  const sqlQuery = "UPDATE state SET state_temperature1 = ?, state_humidity1 = ?, state_temperature2 = ?, state_humidity2 = ? WHERE state_id = 1";
  db.query(sqlQuery, [t1, h1, t2, h2], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/put_state_mode', (req, res) => {
  const mode = req.body.state_mode;

  const sqlQuery = "UPDATE state SET state_mode = ? WHERE state_id =  1";
  db.query(sqlQuery, mode, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/put_state_relaymotor1', (req, res) => {
  const relayMotor1 = req.body.state_relaymotor1;

  const sqlQuery = "UPDATE state SET state_relaymotor1 = ? WHERE state_id = 1";
  db.query(sqlQuery, relayMotor1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/put_state_relaymotor2', (req, res) => {
  const relayMotor2 = req.body.state_relaymotor2;

  const sqlQuery = "UPDATE state SET state_relaymotor2 = ? WHERE state_id = 1";
  db.query(sqlQuery, relayMotor2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/put_state_humidifier1', (req, res) => {
  const relayHumidifier1 = req.body.state_relayhumidifier1;

  const sqlQuery = "UPDATE state SET state_relayhumidifier1 = ? WHERE state_id = 1";
  db.query(sqlQuery, relayHumidifier1, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/put_state_humidifier2', (req, res) => {
  const relayHumidifier2 = req.body.state_relayhumidifier2;

  const sqlQuery = "UPDATE state SET state_relayhumidifier2 = ? WHERE state_id = 1";
  db.query(sqlQuery, relayHumidifier2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// const ping = setInterval(() => {
//   console.log("Hello world!");
// }, 3000);

// app.get('/api/qweasd', (req, res) => {
//   const sqlQuery = "SELECT * FROM state";
//   setInterval(() => {
//     db.query(sqlQuery, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//         console.log(result);
//       }
//     });
//   }, 3000);
// });

app.listen(3001, () => {
  console.log('listening on port 3001!');
});