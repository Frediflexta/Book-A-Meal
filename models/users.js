'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.ENUMS
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};