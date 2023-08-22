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
    },
    {
      category_title: 'Bí ẩn',
    }, {
      category_title: ' Giả tưởng và khoa học viễn tưởng',
    },
    {
      category_title: 'Kinh dị, giật gân',
    },
    {
      category_title: 'truyền cảm hứng',
    }, {
      category_title: 'Tiểu sử, tự truyện và hồi ký',
    },
    {
      category_title: 'Truyện ngắn'
    }, {
      category_title: 'Dạy nấu ăn'
    }, {
      category_title: 'Bài luận'
    }, {
      category_title: 'Lịch sử'
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
