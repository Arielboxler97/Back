const sv = require('../../services/Product')

module.exports = async (req,res) => {
    try {
        res.json(sv.getAllProducts()) 
    } catch (error) {
        
    }
}
