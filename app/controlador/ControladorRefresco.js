const ModeloRefresco = require('../modelos/ModeloRefresco');


function index(req,res){
    console.log('OK');                                      //ya estamos entrando a la funcion de index(controlador todo)
    ModeloRefresco.find({})                                       //Buscar todo
    .then(refresco => {
       if(refresco.length) return res.status(200).send({refresco});
       return res.status(204).send({message: 'No hay datos que mostrar'});

   }).catch(error => res.status(500).send({error}));
 } //creamos una variable


 function crear(req,res){
    new ModeloRefresco(req.body).save()
    .then(refresco =>  res.status(200).send({refresco}))
    .catch(error => res.status(500).send({error}));
}

function buscar(req,res,next)  {
    let consulta = {};
    consulta[req.params.key]=req.params.value;
    ModeloRefresco.find(consulta).then(refresco =>{
        if(!refresco.length) return next();
        req.body.refresco = refresco;
        return next();
    }).catch(error => {
        req.body.error=error;
        next();
       })
}



function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refresco) return res.status(404).send({message: 'No se encontro el producto'});
    let refresco=req.body.refresco;
    return res.status(200).send({refresco});
}

function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refresco) return res.status(404).send({message: 'No se puede actualizar'});
    let refrescoObj = req.body.refresco[0];
    refrescoObj= Object.assign(refrescoObj,req.body); // Comparar informacion que venga dif actualizala (GUardar en esta variable)
    refrescoObj.save().then(refrescoAlta => {
        res.status(200).send({message: 'El registro se actualizo correctamente', refrescoAlta});

    }).catch(error => res.status(500).send({error}));
}

function eliminar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refresco) return res.status(404).send({message: 'No se pudo eliminar el producto'});
    req.body.refresco[0].remove().then(refrescoEliminar => {
       res.status(200).send({message: 'Eliminado correctamente' , refrescoEliminar});
    }).catch(error => res.status(500).send({message:'', error}));  

}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}
