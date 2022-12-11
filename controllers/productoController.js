const Producto = require('../models/producto');

exports.consultarTodos = async (req, res) => {
    try {
        const productos = await Producto.find();

        res.json({ productos });

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.consultarUno = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if(! producto){
            res.status(400).send("No se encontro el producto");
        }
        else {
            res.json({ producto });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.agregarNuevo = async (req, res) => {
    try {
        const buscarProducto = await Producto.findOne({nombre: req.body.nombre});

        
        if(buscarProducto) {
            res.status(400).send("El nombre del producto ya existe en la base de datos");
        }
        else {
            const producto = new Producto(req.body);

            await producto.save();
            res.json({ producto });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.actualizar = async (req, res) => {
    try {
        
        const { nombre, precio, cantidad } = req.body;
        const datosNuevos = { nombre, precio, cantidad };
        
        const producto = await Producto.findByIdAndUpdate(req.params.id, datosNuevos); 
        if(producto) {
            res.json({ producto });
        }
        else {
            res.status(400).send("Error en actualizar");
        }
    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};

exports.eliminar = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndRemove(req.params.id);
        if(! producto){
            res.status(400).send("No se encontro el producto");
        }
        else {
            res.json({ producto });
        }

    } catch (err) {
        console.log("Hubo un error");
        console.log(err);
        res.status(400).send("Hubo un error");
    }
};