

// routes.js - Rutas para el módulo de carrito

const express = require('express');
const router = express.Router();
const cartController = require('./controllers');

// Ruta para obtener el contenido del carrito
router.get('/', cartController.getCartContents);



module.exports = router;

