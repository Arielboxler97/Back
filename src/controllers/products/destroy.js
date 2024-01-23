const { deleteProduct } = require('../../services/Product/Product.services');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteProduct(id);
        res.status(result.status).json({ message: result.message });
    } catch (error) {
        console.error('Error en el controlador:', error.message);
        return res.status(500).json({ message: 'Error en el controlador' });
    }
};
