const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require('path');
// const requireDir = require('require-dir');
// const routes = require('./src/routes');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//  mongoose.connect('mongodb://testes:testes@kit-corretor-axa-dev.onibusiness.com.br:27017/testes', {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//  });

mongoose.connect('mongodb+srv://Well:ws89150128@servertestes.ys5v5.mongodb.net/ApiConsultorio?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//GET, POST, PUT, DELETE

// req.query = Acessar query params (Para Filtros)
// req.params = Acessar route params (Para Edição, Delete)
// req.body = Acessar corpo da requisição (Para Criação, Edição)


app.use(cors());
app.use(express.json());
app.use('/agenda', require('./src/routes'));

app.listen(3333);

console.log("conectado porta 3333!");

// app.all('/*', function(req, res) {
//     res.sendFile(path.resolve('./public/index.html'));
//  });