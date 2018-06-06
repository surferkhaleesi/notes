var User = require('../models/users.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("Authenticating")
    console.log(username)
    console.log(password)
    User.findOne({ where: {username: username} }).then(user=> {
      console.log(user)
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password!=user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log(user)
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => {
    done(null, user);
  });
});

module.exports = passport;
