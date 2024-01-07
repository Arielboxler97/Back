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
        return newAte
    } catch (error) {
        
    }
}

models.exports = {
    CreateAttention
}