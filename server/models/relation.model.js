const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongodb').ObjectID;

const relationSchema = new Schema({
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'UserModel' 
    },
    friends: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'UserModel' 
    }]
  });


const Relation = module.exports = mongoose.model('Relation', relationSchema);


  