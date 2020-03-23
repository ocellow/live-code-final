'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Username cannot be null."
        },
        notEmpty: {
          args: true,
          msg: "Username cannot be empty."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password cannot be null."
        },
        notEmpty: {
          args: true,
          msg: "Password cannot be empty."
        }
      }
    }
  }, { sequelize });

  User.associate = function (models) {
    User.hasMany(models.Report)
    // associations can be defined here
  };
  return User;
};