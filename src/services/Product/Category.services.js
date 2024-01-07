const db = require('../../database/models')

const CreateCategory = async (data) => {
    try {
        const {name} = data
        const newCategory = await db.Category.crate({
            name
        })
        return newCategory
    } catch (error) {
        
    }
}

const getAllCategoy = async () => {
    try {
        const categories = await db.Category.findAll()
        return categories
    } catch (error) {
        
    }
}

models.exports = {
    CreateCategory,
    getAllCategoy
}