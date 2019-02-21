/*
Imports
*/
    // Nodejs
        const { Router } = require('express');
        const passport = require('passport');
        // Inner
        const AuthRouterClass = require('./auth/auth.routes');
        const FrontRouterClass = require('./front/front.routes');
        const PostRouterClass = require('./post/post.routes');
        const UserRouterClass = require('./user/user.routes');
    //
    
    /* 
    Passport Strategy
    Passport est un module NPM qui permet de sécuriser les connexions utilisateur grâce à des stratégies spécifiques. Nous utilisons ici la startégie JWT (cf. setAuthentication)
    */
        
        const { setAuthentication } = require('./../services/auth.serv');
        setAuthentication(passport);
    //

    /* 
    Definition des router
    */  
        // Parent
        const mainRouter = Router();
        const apiRouter = Router();
    
        // Child
        const authRouter = new AuthRouterClass();
        const frontRouter = new FrontRouterClass();
        const postRouter = new PostRouterClass();
        const userRouter = new UserRouterClass({ passport });
    //
    
    /* 
    Définition des routes
    */
        mainRouter.use( '/api', apiRouter );
        apiRouter.use( '/auth', authRouter.init() );
        apiRouter.use( '/user', userRouter.init() );
        apiRouter.use( '/post', postRouter.init() );
        mainRouter.use( '/', frontRouter.init() );
    //
    
    /* 
    Export
    */
        module.exports = mainRouter;
    //