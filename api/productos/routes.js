

// routes.js - Rutas para el módulo de productos

const express = require('express');
const router = express.Router();
const productController = require('./controllers');

// Ruta para obtener todos los productos
router.get('/', productController.getAllProducts);

// Ruta para obtener un producto por su ID
router.get('/:id', productController.getProductById);



module.exports = router;
