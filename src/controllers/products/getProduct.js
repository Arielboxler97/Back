const sv = require('../../services/Product/Product.services')

module.exports = async (req,res) => {
    try {
        console.log("todo ok"); 
        return res.json(sv.getAllProducts())
        
    } catch (error) {
        
    }
}
