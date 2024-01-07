const db = require('../../database/models')

const CreatePlace = async (data) => {
    try {
        const {name,address,coordinates,barrioId,email,socialNetwork,wp1,wp2,wp3,description,slogan,userId} = data

        const newPlace = await db.Place.create({
            name,
            address,
            coordinates,
            barrioId,
            email,
            socialNetwork,
            wp1,
            wp2,
            wp3,
            description,
            slogan,
            userId
        })
        return newPlace
    } catch (error) {
        
    }
}


models.exports = {
    CreatePlace
}