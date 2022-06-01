'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Post }) {
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.hasMany(Post, { foreignKey: 'user_id'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
