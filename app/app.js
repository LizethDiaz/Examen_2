const express = require('express'); //importar  express por capas
//const {Router} = express.Router;
const rutasVinos=require('./rutas/rutasVinos')


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);

module.exports = app; //ejecucion de expr

