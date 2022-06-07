'use strict';

const Clothes = (Sequelize, DataTypes) => {
  const Clothes = Sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
    }
  });
  return Clothes;
}
module.exports = Clothes;