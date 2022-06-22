'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      encryptedTicket: {
        type: Sequelize.TEXT
      },
      showDate: {
        type: Sequelize.DATE
      },
      showTime: {
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};