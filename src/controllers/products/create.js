const {CreateProduct} = require('../../services/Product/Product.services');

module.exports = async (req, res) => {
    
    try {
        const { name, price, description, brandId, placeId } = req.body;

        console.log('Data received in the controller:', req.body);
        
        if (name && price && description) {
            console.log("Dentro del if");
            const newProduct = {
                name,
                price,
                description,
                brandId: brandId || null,
                placeId: placeId || null
            };
            await CreateProduct(newProduct);
           return res.status(201).json({ message: 'Product created successfully' });
        } else {
            console.log("Hubo un problemilla");
         return res.status(400).json({ message: 'Missing required fields' });
        }
    } catch (error) {
        console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
};
