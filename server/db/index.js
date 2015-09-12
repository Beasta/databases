var mysql = require('mysql');
var request = require("request");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection;


dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });



module.exports = {
  messages: {
    get: function(req, res) {},
    post: function(req, res) {
      dbConnection.connect();
      console.log('posting messages');
      console.log(req.body.message);

      var body = {'body':req.body.message};
      console.log(body);
      dbConnection.query('INSERT INTO `messages` SET ?', body, function(error, result) {
        if(error) {
          throw error;
        } else {
          console.log('success');
          dbConnection.end();
          res.status(201).end();
        }
      });
    }
  },
  users: {
    get: function(req, res) {},
    post: function(req, res) {
      dbConnection.connect();
      var body = req.body;
      console.log(body);
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



