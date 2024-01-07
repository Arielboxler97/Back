const db = require('../../database/models')

const CreateUser = async (data) => {
    try {
        const {name,lastName,email,password,role,phone} = data
        const newUser = await db.User.create({
            name,
            lastName,
            email,
            password,
            role,
            phone
        })
        return newUser
    } catch (error) {
        
    }
}

models.exports = {
    CreateUser
}