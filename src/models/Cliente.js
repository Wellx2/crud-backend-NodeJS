const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClienteSchema = new mongoose.Schema({
    
    
    nome: {type: String, required: true },
    
    cpf:{type: Number, required: true },

    nascimento: { type: Date, required: true },
 
    celular: { type: Number, required: true },
    
    email: { type: String, required:true },

    biografia: { type: String, required:true },

    genero : {type: String, require:true },

    def: {type: Boolean },

    createDate: { type: Date, default: Date.now }

});

ClienteSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Cliente', ClienteSchema,'ConsultorioApi'); 