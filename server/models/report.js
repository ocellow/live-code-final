'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Report extends Model { }

  Report.init({
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
    CountryId: {
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
    UserId: {
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
  }, { sequelize });

  Report.associate = function (models) {
    // associations can be defined here
    Report.belongsTo(models.User)
    Report.belongsTo(models.Country)
  };
  return Report;
};