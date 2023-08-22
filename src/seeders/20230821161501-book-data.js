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
    await queryInterface.bulkInsert('books', [{
      book_title: 'Tam thể',
      book_author: 'Lưu Từ Hân',
      book_description: 'Uông Diểu, vị giáo sư về vật liệu nano ngày nào cũng đăng nhập vào “Tam Thể”. Tại trò chơi online đó, anh đắm chìm trong một thế giới khác, nơi một nền văn minh có thể chỉ kéo dài vài ngày, bầu trời có thể xuất hiện ba mặt trời cùng lúc và con người còn phải biến thành xác khô để sinh tồn.',
      book_price: '128000',
      book_quantity: '100',
      category_id: '3'
    },
    {
      book_title: 'Việt Nam Sử Lược',
      book_author: 'Trần Trọng Kim',
      book_description: 'Đầu thế kỷ XX, giữa lúc nền học thuật nước nhà chỉ có các bộ đại tác như Đại Việt sử ký toàn thư hay Khâm định Việt sử thông giám cương mục là nguồn sử liệu chính thống nhưng chưa đáp ứng nhu cầu tìm hiểu lịch sử của phần đông dân chúng, thì Việt Nam sử lược, với tư cách là bộ thông sử chi tiết đầu tiên được viết bằng chữ quốc ngữ, đã xuất hiện và nhanh chóng thu hút sự quan tâm của độc giả lẫn giới nghiên cứu cả nước. Từ đó đến nay đã 100 năm trôi qua, tác phẩm vẫn giữ nguyên giá trị và là quyển sách vỡ lòng quen thuộc cho những ai bắt đầu tìm hiểu lịch sử Việt Nam. ',
      book_price: '389500',
      book_quantity: '100',
      category_id: '10'
    },
    {
      book_title: 'Sách Nhà Giả Kim',
      book_author: 'Paulo Coelho',
      book_description: 'Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.',
      book_price: '79000',
      book_quantity: '100',
      category_id: '5'
    },
    {
      book_title: 'Người Lạ Trong Nhà',
      book_author: 'Leila Slimani',
      book_description: 'Câu chuyện bắt đầu bằng một cảnh tượng kinh hoàng: một bé trai hai tuổi đã chết, một bé gái bốn tuổi đang hấp hối và người vú em trông giữ hai đứa trẻ – kẻ gây ra tội ác khủng khiếp này – cũng vừa tự kết liễu đời mình. Cuốn tiểu thuyết mở ra bằng một cái kết, nhưng mọi chuyện lại không chấm dứt ở đó, quá khứ đã qua và hiện tại vừa thành quá khứ chỉ mở màn cho một bi kịch không hồi kết, dai dẳng và ám ảnh, của cuộc sống hiện đại.',
      book_price: '79000',
      book_quantity: '100',
      category_id: '4'
    },
    {
      book_title: 'Rừng Na Uy',
      book_author: 'Haruki Murakami',
      book_description: 'Dịu dàng, quyến rũ như thơ, căng thẳng như bi kịch và gợi dục một cách mê đắm. Một cuốn tiểu thuyết kỳ diệu có âm hưởng hướng đạo và tự nguyện. Nhân vật chính yêu người yêu của người bạn thân nhất thời niên thiếu đã tự sát của mình. Nhưng một thời gian sau,a nh chàng cũng phải lòng một nữ sinh ở khoa mình... Tuyệt đối nên đọc. - SDM',
      book_price: '138650',
      book_quantity: '100',
      category_id: '1'
    }, {
      book_title: 'Khoa Học Về Nấu Ăn',
      book_author: 'Stuart Farrimond',
      book_description: 'Nắm bắt các kiến thức khoa học và nấu ăn như một đầu bếp thực thụ!',
      book_price: '312500',
      book_quantity: '100',
      category_id: '7'
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
