

// controllers.js - Controladores para el módulo de productos

// Controlador para obtener todos los productos
exports.getAllProducts = (req, res) => {
    // Lógica para obtener todos los productos desde la base de datos
    res.json({ message: "Obtener todos los productos" });
};

// Controlador para obtener un producto por su ID
exports.getProductById = (req, res) => {
    const productId = req.params.id;
    // Lógica para obtener un producto por su ID desde la base de datos
    res.json({ message: `Obtener producto con ID ${productId}` });
};



