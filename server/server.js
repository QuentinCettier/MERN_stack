/* 
Import
*/
    //=> Gestion des variables d'environnement
    require('dotenv').config();
    //=> Gestion server
    const express = require('express');
    //=> Gestion du dossier client
    const path = require('path');
    //=> Gestion du moteur de rendu
    const ejs = require('ejs');

    const cors = require('cors');
    //=> Gestion du corps des requêtes HTTP
    const bodyParser = require('body-parser');
    //=> Gestion des cookies
    const cookieParser = require('cookie-parser');
    //=> Connexion BDD
    const dbConnect = require('./services/mongodb.serv')
    //=> Router
    const mainRouter = require('./routes/main.router');

    const Socket = require('./controllers/SocketController')

    
    
//

/* 
Configuration
*/
    //=> Définir le server et le port (.env)
    const server = express();

    const port = process.env.PORT;

    const http = require('http')
    
    const app = http.createServer(server)

    /**
     * Create Socket
     */
    const io = new Socket(app)
    
    
    // const socketIo = require('socket.io')

    // const io = socketIo(app)

    // io.on('connection', function(socket){
    //     console.log('a user connected');
    // });
      
    

    //=> Configurer le server
    class ServerClass {
        init(){
            //=> Moteur de rendu
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );
        
            //=> Dossier client
            
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            server.use(function(req, res, next) {
                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.header("Access-Control-Allow-Credentials", "true")
                next();
              });

            server.get('/api/hello', (req, res) => {
                res.send({ response: "I am alive" }).status(200)
            });
            server.post('/api/hello', (req, res) => {
                console.log(req.body);
                res.send(
                  `I received your POST request. This is what you sent me: ${req.body.post}`,
                );
              });
            //=> Cookie-parser
            server.use(cookieParser());
            
            //=> Router
            server.use('/', mainRouter);

            
            
            //=> Lancer le server
            this.launch();
        }

        launch(){
            // Connecter la BDD
            dbConnect()
            .then( db => {
                // Start server
                app.listen( port, () => {
                    console.log({
                        monngo: `BDD is connected ${db}!`,
                        server: `Server listening on port ${port}!`
                    });
                });
            })
            .catch( err => console.log(`Error MongoDB ${err}`) );
        }
    }
//

/*
Start server
*/
    new ServerClass().init();
//
module.exports = { server }
