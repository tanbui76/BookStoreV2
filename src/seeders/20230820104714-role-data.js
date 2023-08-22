'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('roles', [{
      role_type: 'admin',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      role_type: 'user',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      role_type: 'guest',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', null, {});
  }
};
