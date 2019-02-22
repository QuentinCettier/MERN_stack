/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    
    // Inner
    const UserModel = require('../../models/user.model');
    const RelationModel = require('./../../models/relation.model')
//


/* 
Méthodes CRUD
*/
    const register = (body) => {
        return new Promise( (resolve, reject) => {
            const newUser = new UserModel({username: body.username, password: body.password})
            UserModel.createUser(newUser, (error, user) => {
                
                if(error) reject(error)
                else {
                    const relation = new RelationModel({
                        user: user.id,
                        friends: []
                    })
                    relation.save()
                    return resolve(user)
                }
            })
        });
    };

    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( {username: body.username}, (error, user) =>{
                if(error) reject(error) // Mongo error
                else if(!user) reject('Unknow user')
                else{
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) reject('Password not valid')
                    else{
                        const expiry = new Date();
                        expiry.setDate(expiry.getDate() + 59);
                        
                        // JWT creation
                        const token =  jwt.sign({
                            _id: user._id,
                            username: user.username,
                            password: user.password,
                            expireIn: '10s',
                            exp: parseInt(expiry.getTime() / 100, 10)
                        }, process.env.JWT_SECRET);
                        
                        // const token = user.generateJwt()
                        // Set cookie
                        res.cookie( 'hetic-blog', token )
                        return resolve({user});
                    };
                };
            });
        });
    };

    const requireLogin = (body) => {

    }
//

/* 
Exports
*/
    module.exports = {
        register,
        login
    }
//