"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "alumno",
         [
            {
               name: "Pepe",
               last_name: "Doe",
               age: 22,
               birth_date: new Date(),
               active: "NO",
               id_nationality: 2,
            },
            {
               name: "Pepe2",
               last_name: "Doe2",
               age: 44,
               birth_date: new Date(),
               active: "NO",
               id_nationality: 2,
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   },
};
