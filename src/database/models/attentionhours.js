'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AttentionHours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AttentionHours.hasMany(models.Place,{foreignKey:"placeId"})
    }
  }
  AttentionHours.init({
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    day: DataTypes.STRING,
    placeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AttentionHours',
  });
  return AttentionHours;
};