const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongodb').ObjectID;
const UserModel = require('./user.model');

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

const RelationModel = module.exports = mongoose.model('Relation', relationSchema);

module.exports.getFriendArray = (user_1) => {
    RelationModel.findOne({user: user_1.id }, (err, user) => {

        if(user) {
            console.log(user)
        } else {
            console.log('non')
        }
    })
}
module.exports.addFriend = async (userRequest,userToAdd) => {
    UserModel.findOne({username: userToAdd}, (error, user_1) => {
        if(error) reject(error)
        else if(!user_1) {
            reject('Unkown user to add') 
        } else {
            UserModel.findOne({username: userRequest}, (error, user_2) => {
                if(error) return reject(error)
                else if(!user_2) {
                    throw error
                } else {
                    
                    // RelationModel.getFriendArray(user_2)
                    RelationModel.findOne({user: user_2.id}, (err, relation) => {
                        if(relation) {
                            relation.friends.push(user_1.id)
                            relation.save()
                            
                        }
                    })                    
                }
            })
        }
        
    })

} 
  