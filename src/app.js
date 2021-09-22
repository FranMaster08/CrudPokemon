const express = require('express');
const app = express();
const path = require('path');
const ruta = require('./router/home.routes')
// preparamos server para formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));


//motor de vistas para
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))

// perparamos las rutas
app.use('/',ruta)

module.exports = app