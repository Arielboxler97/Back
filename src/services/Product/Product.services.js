const db = require('../../database/models')


const CreateProduct = async (data) => {
    try {
        const {name,price,description,brandId,placeId} = data

        const newProduct = await db.Product.create({
            name,
            price,
            description,
            brandId,
            placeId
        });

        return newProduct
    } catch (error) {
        
    }
}


module.exports = {
    CreateProduct
}