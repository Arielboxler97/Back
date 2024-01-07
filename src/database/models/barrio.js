'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barrio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barrio.belongsTo(models.Place,{foreignKey:"barrioId"})
    }
  }
  Barrio.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barrio',
  });
  return Barrio;
};