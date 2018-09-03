let db = require('./db');

module.exports.handleSignUp = (userName, password) => {
  // checks to see if the username, password exist
  //writes username/password to db.js
  db.saveUser({userName, password});
  //routes the users to a landing page after signing in
  //sends the user a welcome/confirmation email
}
