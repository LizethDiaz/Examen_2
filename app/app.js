const express = require('express'); //importar  express por capas
//const {Router} = express.Router;
const rutasVinos=require('./rutas/rutasVinos')//
const rutasRefresco=require('./rutas/rutasRefresco')




const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);//
app.use('/refresco',rutasRefresco);//



module.exports = app; //ejecucion de expr

