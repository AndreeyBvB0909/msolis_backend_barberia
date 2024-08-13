const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuarios');

async function register(req, res) {
    const { nombre, email, password, rol, telefono, reseñas } = req.body;
    if (!email || !password) {
        return res.status(404).send({ message: 'El email y la contraseña son obligatorios' });
    }

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password: hashPassword,
            rol,
            telefono,
            reseñas
        });

        const usuarioGuardado = await nuevoUsuario.save();

        res.status(200).send({ message: 'Usuario creado correctamente', usuario: usuarioGuardado });
    } catch (err) {
        if (err.code === 11000) {
            res.status(500).send({ message: 'El email ya está en uso' });
        } else {
            res.status(500).send({ message: 'Error al crear el usuario', error: err.message });
        }
    }
}

module.exports = { 
    register
};
