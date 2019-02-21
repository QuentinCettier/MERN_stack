/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const authRouter = express.Router();

    const passport = require('passport')
    const LocalStrategy = require('passport-local').Strategy

    // Inner
    const checkFields = require('../../services/request.checker');
    const { register, login } = require('./auth.ctrl');
//

/* 
Definition
*/
    class AuthRouterClass {
        constructor(){}

        routes(){
            // Update

            
            authRouter.post( '/register', (req, res) => {

                if(typeof req.body === 'undefined' || req.body === null) {
                    return res.json( { msg : 'No body provided', data: null} )
                }

                const { ok, extra, miss } = checkFields([ 'password', 'username' ], req.body)
                if(!ok) {
                    res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                } else {
                    register(req.body, res)
                    .then( apiResponse => res.json( { msg: 'User registered', data: { registered : true } } ) )
                    .catch( apiResponse => res.json( { msg: 'User not registered', data: { registered : false } } ))
                }
            })

            
            // Login
            authRouter.post( '/login', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.json( { msg: 'No body data provided', data: null } )
                }
                
                // Check fields in the body
                const { ok, extra, miss } = checkFields( [ 'password', 'username'], req.body )

                //=> Error: bad fields provided
                if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                else { 
                    
                    // Register new user
                    login(req.body, res)
                    .then( apiResponse => res.json( { msg: 'User logged', data: apiResponse } ) )
                    .catch(apiResponse => res.json( { msg: 'User not logged', data: apiResponse } ) );    
                }
            })

            // authRouter.use( (req, res, next)=> {
            //     var token = req.body.token || req.query.token || req.headers['x-access-token']
            //     console.log('kneknf')
            //     if(token) {
            //         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            //             if(err) {
            //                 return res.json({success: false, message: 'Failed to authenticate token'})
            //             } else {
            //                 req.decoded = decoded
            //                 next()
            //             }
            //         })
            //     } else {
            //         return res.status(403).send({
            //             success: false,
            //             message: 'No token provided'
            //         })
            //     }
            // })
        }

        init(){
            this.routes();
            return authRouter;
        }
    }
//

/* 
Export
*/
    module.exports = AuthRouterClass;
//