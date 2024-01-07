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

models.exports = {
    CreateBrand
}