function register(req, res) {
    console.log('Se ha registrado correctamente');

    res.status(200).send({ message: 'Todo OK' });
}

module.exports = { 
    register
};