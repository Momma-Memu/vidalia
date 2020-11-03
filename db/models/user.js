'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dob: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Quest, { foreignKey: 'creatorId' });
  };
  User.prototype.toSafeObject = function() {
    const {
      id,
      username
    } = this;

    return { id, username };
  };

  return User;
};