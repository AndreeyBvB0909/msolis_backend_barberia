const Servicio = require('../models/servicios');

async function addServicio(req, res) {
    const {service_id, nombre, descripcion, duracion, costo, imagen} = req.body;
    const servicio = new Servicio({
        service_id,
        nombre, 
        descripcion, 
        duracion, 
        costo, 
        imagen
    });

    try {
        const servicioGuardado = await servicio.save();
        res.status(200).send({ message: 'Servicio creado correctamente', servicio: servicioGuardado });
    } catch (err) {
        res.status(500).send({ message: 'Error al crear el servicio', error: err.message });
    }
}

module.exports = {
    addServicio
};