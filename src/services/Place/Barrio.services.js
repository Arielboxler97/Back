const db = require('../../database/models')

const CreateBarrio = async (req,res) => {
    try {
        const {name} = req
        const newBarrio = await db.Barrio.create( {
            name
        })
        res.json(newBarrio)
    } catch (error) {
        
    }
}

const getAllBarrios = async () => {
    try {
        const barrios = await db.Barrio.findAll()
        return barrios
    } catch (error) {
       
    }
}
models.exports ={
    CreateBarrio,
    getAllBarrios
}