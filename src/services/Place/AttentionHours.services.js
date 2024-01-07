const db = require('../../database/models')

const CreateAttention = async (data) => {
    try {
        const {startTime,endTime,day,placeId} = data
        const newAte = await db.AttentionHours.create({
            startTime,
            endTime,
            day,
            placeId
        })
        res.json(newAte)
    } catch (error) {
        
    }
}

const getAllAttention = async () => {
    try {
        const attentionHours = await db.AttentionHours.findAll()
        return attentionHours
    } catch (error) {
       
    }
}

models.exports = {
    CreateAttention,
    getAllAttention
}