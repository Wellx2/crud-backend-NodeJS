const express = require('express');
const routes = express.Router();

const ClientesController  = require('./controllers/ClientesController');


//Primeira Rota 
routes.get("/cliente", ClientesController.index);
routes.get("/cliente/:id", ClientesController.show);
routes.post("/cliente/newclient", ClientesController.store);
routes.put("/cliente/:id", ClientesController.update);
routes.delete("/cliente/:id", ClientesController.destroy);
   

module.exports = routes;
 

