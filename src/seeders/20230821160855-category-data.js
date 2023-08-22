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
    await queryInterface.bulkInsert('categorys', [{
      category_title: 'Tình cảm',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    },
    {
      category_title: 'Bí ẩn',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      category_title: 'Giả tưởng và khoa học viễn tưởng',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    },
    {
      category_title: 'Kinh dị, giật gân',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    },
    {
      category_title: 'truyền cảm hứng',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      category_title: 'Tiểu sử, tự truyện và hồi ký',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    },
    {
      category_title: 'Truyện ngắn',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      category_title: 'Dạy nấu ăn',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      category_title: 'Bài luận',
      createdAt: '2022-12-12',
      updatedAt: '2022-12-12'
    }, {
      category_title: 'Lịch sử',
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
    await queryInterface.bulkDelete('categorys', null, {});
  }
};
