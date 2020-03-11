
const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser  =require('cookie-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle =  app.getRequestHandler();
dotenv.config();

app.prepare().then(()=>{
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({extended:true}));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressSession({
        resave: false, 
        saveUninitialized : false,
        secret : process.env.COOKIE_SECRET,
        cookie : {
            httpOnly : true,
            secure : false,
        }
    }));

    server.get('/user/:id', (req,res) => {
        return app.render(req, res, '/user', {id :req.params.id} );
    })

    server.get( '*', (req, res) => {
        return handle(req, res);
    })

    server.listen(3060,()=>{
        console.log('next+express running on port 3060')
    });
});