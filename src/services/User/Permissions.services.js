const db = require('../../database/models')

const CreatePermission = async (data) => {
    try {
        const {name,description} = data
        const newPermision = await db.Perermission.create({
            name,
            description
        })
        return description
    } catch (error) {
        
    }
}

models.exports = {
    CreatePermission
}