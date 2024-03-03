

// index.js - Punto de entrada de la aplicación

const express = require('express');
const app = express();

// Importar rutas de los módulos
const productosRoutes = require('./api/productos/routes');
const carritoRoutes = require('./api/carrito/routes');

// Usar las rutas de los módulos
app.use('/api/productos', productosRoutes);
app.use('/api/carrito', carritoRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
