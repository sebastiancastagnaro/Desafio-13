

// routes.js - Rutas para el módulo de sesiones

const express = require('express');
const router = express.Router();
const sessionController = require('./controllers');

// Ruta para iniciar sesión
router.post('/login', sessionController.login);

// Ruta para cerrar sesión
router.get('/logout', sessionController.logout);


module.exports = router;
