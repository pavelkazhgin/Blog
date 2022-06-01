'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = [
      { name: 'Pablo',
        pass: '123',
        email: 'escobar',
        role_id: 1,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }
    ]

    const roles = [
      {status:0, createdAt: new Date(), updatedAt: new Date()},
      {status:1, createdAt: new Date(), updatedAt: new Date()}
    ]

    const posts = [
      {tittle: 'Учеба', user_id:1, createdAt: new Date(), updatedAt: new Date()},
      {tittle: 'Работа', user_id:1, createdAt: new Date(), updatedAt: new Date()},
      {tittle: 'Досуг', user_id:1, createdAt: new Date(), updatedAt: new Date()}
    ]
    
    await queryInterface.bulkInsert('Roles', roles);
    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Posts', posts);
  },




  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
     await queryInterface.bulkDelete('Roles', null, {});
     await queryInterface.bulkDelete('Posts', null, {});
  }
};
