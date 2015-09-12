var mysql = require('mysql');
var request = require("request");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection;


// dbConnection = mysql.createConnection({
//     user: "root",
//     password: "",
//     database: "chat"
//   });

module.exports = {

  messages: {
    get: function(req, res) {
      console.log('index.js messages get');
      dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
      });
      dbConnection.connect();
      var message = { body:req.body.message };
      // var message = req.body;
      console.log(req.body);
      console.log('getting a message', message, typeof message);
      dbConnection.query('SELECT * FROM messages', function(error, result) {
        if(error) {
          throw error;
        } else {
          console.log(result);
          dbConnection.end();
          console.log('success');
          res.status(200).end(JSON.stringify(result));
        }
      });
    },
    post: function(req, res) {
      dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
      });
      dbConnection.connect();
      var message = { body:req.body.message };
      // var message = req.body;
      console.log(req.body);
      console.log('posting a message', message, typeof message);
      dbConnection.query('INSERT INTO messages SET ?', message, function(error, result) {
        if(error) {
          throw error;
        } else {
          dbConnection.end();
          console.log('success');
          res.status(201).end();
        }
      });
    }
  },
  users: {
    get: function(req, res) {},
    post: function(req, res) {
      dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
      });
      dbConnection.connect();

      var body = req.body;
      console.log('posting a user',body,typeof body);
      // add check to see if user is already in there, SELECT query and check results length
      dbConnection.query('INSERT INTO `users` SET ?', body, function(error, result) {
        if(error) {
          throw error;
        } else {
          console.log('success');
          dbConnection.end();
          res.status(201).end();
        }
      });
    } 
  }
}



