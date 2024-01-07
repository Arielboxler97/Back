const db = require('../../database/models')

const CreateBarrio = async (data) => {
    try {
        const {name} = data
        const newBarrio = await db.Barrio.create( {
            name
        })
        return newBarrio
    } catch (error) {
        
    }
}
models.exports={
    CreateBarrio
}