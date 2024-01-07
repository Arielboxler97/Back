const db = require('../../database/models')

const CreateBrand = async (data) => {
    try {
        const {name} = data
        const newBrand = await db.Brand.create( {
            name
        })
        return newBrand
    } catch (error) {
        
    }
}

const getAllBrand = async () => {
    try {
        const brand = await db.Brand.findAll()
        return brand
    } catch (error) {
        
    }
}

models.exports = {
    CreateBrand,
    getAllBrand
}