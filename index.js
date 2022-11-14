// On récupére dotenv et on charge les variables d'environement
require('dotenv').config({ override: true });

const path = require('path');
const express = require('express');
const router = require('./app/routers');

// Pour JS toutes les valeurs sont truthy sauf 6 :
// false
// 0
// ""
// Null
// undefined
// NaN

// l'opérateur || cherche la première valeur truthy et la renvoie
// et s'il n'en trouve pas, il renvoie la dernière valeur

const port = process.env.PORT || 4000;

const app = express();

app.locals.siteName = "Trombin-o-clock";

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './public')));

app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});


