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

models.exports = {
    CreateCategory
}