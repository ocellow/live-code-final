'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Country extends Model { }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "name cannot be null."
          },
          notEmpty: {
            args: true,
            msg: "name cannot be empty."
          }
        },
      },
      cases: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Cases cannot be null."
          },
          notEmpty: {
            args: true,
            msg: "Cases cannot be empty."
          }
        },
      },
      deaths: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Death cannot be null."
          },
          notEmpty: {
            args: true,
            msg: "Death cannot be empty."
          }
        },
      },
      recovered: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Recover cannot be null."
          },
          notEmpty: {
            args: true,
            msg: "Recover cannot be empty."
          }
        },
      },
    },
    {
      sequelize
    }
  );
  Country.associate = function (models) {
    // associations can be defined here
    Country.hasMany(models.Report);
  };
  return Country;
};
