const db = require('../../database/models')


const CreateProduct = async (data) => {
    
    try {
        console.log("estoy en el srv");
        const {name,price,description,brandId,placeId} = data
        console.log('Data received in the service:', data);
        const newProduct = await db.Product.create({
            name,
            price,
            description,
            brandId :brandId || null,
            placeId :placeId || null
        });
        console.log('New Product Data:', newProduct);
        return newProduct
    } catch (error) {
        console.error('Error creating product:', error.message);
        throw new Error('Error creating product in the database');
    }
}

const getAllProducts = async () => {
    try {
        const products = await db.Product.findAll()
        return products
    } catch (error) {
        
    }
}

module.exports = {
    CreateProduct,
    getAllProducts
}
