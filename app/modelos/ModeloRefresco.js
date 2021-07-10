const mongoose = require('mongoose');

const RefrescoSchema  = new mongoose.Schema({
   
    codigo:{
        type: Number,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    precio:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date

    }

})


const Refresco =mongoose.model('Refresco', RefrescoSchema);

module.exports = Refresco;