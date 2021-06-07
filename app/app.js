const path = require('path');
require('dotenv').config({});


const express = require('express');
const app = express();

require('./config/dbconnetion');

app.use(express.json({limit: '50mb'}));


//rotas
const clienteRoutes = require('./routes/clienteRoutes');
app.use('/cliente',clienteRoutes);

const atendenteRoutes = require('./routes/atendenteRoutes');
app.use('/atendente',atendenteRoutes);

const petRoutes = require('./routes/petRoutes');
app.use('/pet',petRoutes);


app.listen(3000, () => {
    console.log('API ONLINE')
});

module.exports = app;