'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: "hanif",
        profession: "Software Engineer",
        role: "admin",
        email: "hanif@gmail.com",
        password: await bcrypt.hash('Admin!23', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "fauzi",
        profession: "Front End Developer",
        role: "student",
        email: "fauzi@gmail.com",
        password: await bcrypt.hash('Admin!23', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
