const sv = require('../../services/Product/Product.services');

module.exports = async (req, res) => {
    try {
        const { name, price, description, brandId, placeId } = req.body;

        if (name && price && description && brandId && placeId) {
            const newProduct = {
                name,
                price,
                description,
                brandId,
                placeId
            };
            await sv.CreateProduct(newProduct);
            res.status(201).json({ message: 'Product created successfully' });
        } else {
            res.status(400).json({ message: 'Missing required fields' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
