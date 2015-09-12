var db = require('../db');


module.exports = {
  messages: {
    get: function (req,res) {
      db.messages.get(req,res);
    }, // a function which produces all the messages
    post: function (req, res) {
      db.messages.post(req, res);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req,res) {
      db.users.get(req,res);
    },
    post: function (req, res) {
      db.users.post(req, res);

    }
  }
};

