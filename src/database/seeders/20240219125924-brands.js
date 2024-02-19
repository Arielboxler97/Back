'use strict';

const brand = ["Maderas el Condor", "Materiales del Sur", "Pasquini", "Mat. HNOS", "Home-Materials"]

const brandsFormatDB = brand.map(marca => {
  return {
    name : marca,
    createdAt:new Date,
    updatedAt:new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Brands', brandsFormatDB, {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
