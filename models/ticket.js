'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User, { foreignKey: 'UserId' });
      Ticket.belongsTo(models.Movie, { foreignKey: 'MovieId' });
    }
  }
  Ticket.init({
    encryptedTicket: DataTypes.TEXT,
    showDate: DataTypes.DATE,
    showTime: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};