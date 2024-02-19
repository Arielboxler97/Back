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
        const products = await db.Product.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'placeId', 'brandId']
            },
            include : [
                {
                    association : 'brand',
                    attributes : ['id', 'name']
                },
            ],
        })
        return products
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR Servicio'
        }
    }
}

const getProductById = async (id) => {
    try {
        if (!id) {
            throw {
                status : 400,
                message : 'ID no existe'
            }
        }

        const product = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })

        if (!product) {
            throw {
                status : 400,
                message : 'No hay producto con este ID'
            }
        }

        return product

    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR Servicio'
        }
    }
}

const updateProduct = async (id, data) => {
    try {
        const { name, price, description, brandId, placeId } = data;

        // Encuentra el producto por su ID para saber si existe y te ofrece el modelo completo
        const existingProduct = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'placeId', 'brandId']
            },
            include : [
                {
                    association : 'brand',
                    attributes : ['id', 'name']
                },
            ],
        });

        if (!existingProduct) {
            return null
        }

        // Actualiza las propiedades del producto
        const updatedProduct = await existingProduct.update({
            
            name: name?.trim() || existingProduct.name,
            price: +price || existingProduct.price,
            description: description?.trim() || existingProduct.description,
            brandId: +brandId || existingProduct.brandId,
            placeId: +placeId || existingProduct.placeId,
        
        });

        return updatedProduct;
    } catch (error) {
        console.error('Error en el service:', error.message);
        throw new Error('Error en el service');
    }
};


const deleteProduct = async (id) => {
    try {
        
        if(!id){
            throw {
                status : 400,
                message: 'El id no existe'
            }
        }

        const product = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })

        if(!product){
            throw {
                status :400,
                message : 'No hay producto con ese id crack'
            }
        }
        
        
        await product.destroy()

        return {
            status: 200,
            message : 'El producto fue eliminado crack'
        }


    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio de eliminación'
        };
    }
}

module.exports = {
    CreateProduct,
    getAllProducts,
    updateProduct,
    getProductById,
    deleteProduct
}
