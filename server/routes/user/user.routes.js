/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const userRouter = express.Router();
    const mongoose = require('mongoose')
    
    // Inner
    const checkFields = require('../../services/request.checker');
    const { createItem, readItem, updateItem, deleteItem } = require('./user.ctrl');
//
    const RelationModel = require('./../../models/relation.model')
    const UserModel = require('./../../models/user.model')

/* 
Definition
*/
    class UserRouterClass {
        constructor({ passport }){
            this.passport = passport
        }
        routes(){
            // Create
            userRouter.post( '/about', this.passport.authenticate('jwt', {session: false}), (req, res) => {
                // console.log(req.user)
                let friendsArray = []
                RelationModel.findOne({user: req.user.id}, (error, relation) => {
                    
                    if(error) throw error
                    if(!relation) {
                        
                        return res.json({msg: 'No relation found', data: null})
                    } else {
                        for(let i = 0; i<=relation.friends.length - 1; i++) {
                            // console.log(relation.friends[i])
                            UserModel.findOne({ _id: relation.friends[i] }, (error, user) => {
                                
                                if(error) throw error
                                if(!user) console.log('salut')
                                else {
                                    if(i===relation.friends.length - 1) {
                                        friendsArray[i] = user  
                                        
                                        return res.json({ msg : 'Friends', data: { user: req.user, friends: friendsArray} })
                                    }
                                    friendsArray[i] = user  
                                    
                                }
                                // console.log(friendsArray)  
                            })
                            
                        }
                        
                    }
                        
                    
                })
            })

            userRouter.post('/add', (req, res) => {
        
                RelationModel.addFriend(req.body.user ,req.body.friend)
                // return res.json({msg: 'access granted', data: req.user})
                // RelationModel.addFriend()
            })
            // Read
            userRouter.get( '/', (req, res) => {
                res.json( { msg: "Read user" } )
            })

            // Update
            userRouter.put( '/', (req, res) => {
                res.json( { msg: "Update user" } )
            })

            // Delete
            userRouter.delete( '/', (req, res) => {
                res.json( { msg: "Delete user" } )
            })
        }

        init(){
            this.routes();
            return userRouter;
        }
    }
//

/* 
Export
*/
    module.exports = UserRouterClass;
//