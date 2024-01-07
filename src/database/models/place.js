'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.hasMany(models.User ,{foreignKey:"userId"})
      Place.hasMany(models.Barrio,{foreignKey:"barrioId"})
      Place.belongsTo(models.AttentionHours,{foreignKey:"placeId"})
      Place.belongsTo(models.Product,{foreignKey:"placeId"})
    }
  }
  Place.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    coordinates: DataTypes.STRING,
    barrioId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    socialNetwork: DataTypes.STRING,
    wp1: DataTypes.STRING,
    wp2: DataTypes.STRING,
    wp3: DataTypes.STRING,
    description: DataTypes.STRING,
    slogan: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};