/* 
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectID;

//


/*
Config
*/
const userSchema = new Schema({
    username: String,
    password: String,
}); 



// Méthode
userSchema.methods.generateJwt = () => {
    // set expiration
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 59);

    // JWT creation
    return jwt.sign({
        _id: this._id,
        username: this.username,
        password: this.password,
        expireIn: '10s',
        exp: parseInt(expiry.getTime() / 100, 10)
    }, process.env.JWT_SECRET);
};

/* 
Export
*/
const UserModel = module.exports = mongoose.model('user', userSchema);

/**
 * Methods
 */
module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          console.log('err')
        }
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log('errors')
          }
          newUser.password = hash
          newUser.save(callback)
        })
      })
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
      if (err) {
        throw err
      }
      callback(null, isMatch)
    })
  }