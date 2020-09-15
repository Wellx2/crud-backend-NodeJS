const mongoose = require('mongoose');
const Clientes = require('../models/Cliente');


module.exports = {
    // async index - irá fazer a listagem de todos os produtos existente na base de dados.
    async index(req ,res) {
        const cliente = await Clientes.find({});
        // const { page = 1 } = req.query; 
        
        // const cliente = await Clientes.paginate({}, {page , limit: 10 });

        // await - faz com que a próxima linha só seja executada depois de conseguir buscar a requisição no Banco de Dados.

        return res.json(cliente);

    },

    async show(req, res){
        //Filtro dos registros do Banco do Dados.
        const cliente = await Clientes.findById(req.params.id);
        
        return res.json(cliente);

    },
    
    async store(req, res) {
        // criação de novos registros. 
        const cliente = await Clientes.create(req.body);

        return res.json(cliente); 
    },

    async update(req, res) {
        // atualização de novos registros. 
        const cliente = await Clientes.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(cliente); 
    },


    async destroy(req, res) {
        // Remoção de registro 
         await Clientes.findByIdAndRemove(req.params.id);

        return res.send("Excluído com Sucesso");
    },



};