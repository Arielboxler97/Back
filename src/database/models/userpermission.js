'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserPermission.belongsTo(models.User, { foreignKey: 'userId' });
      UserPermission.belongsTo(models.Permission, { foreignKey: 'permissionId' });
    }
  }
  UserPermission.init({
    userId: DataTypes.INTEGER,
    permissionId: DataTypes.INTEGER,
    creatorId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserPermission',
  });
  return UserPermission;
};