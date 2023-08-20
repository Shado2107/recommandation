const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./src/lib/db');
const port  = process.env.PORT || 3000;


const app=express();


//connection a la base de donnée
connectDB();


//les middlwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Les routes de l'api



//lancer le serveur
app.listen(port, () => console.log('le serveur est en marche'));