'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.all([
      queryInterface.addColumn('Users', 'login', {type: Sequelize.STRING, allowNull:false, unique:true}),
      queryInterface.addColumn('Users', 'senha', {type: Sequelize.STRING, allowNull:false})
    ]) 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all([
      queryInterface.removeColumn('Users', 'login'),
      queryInterface.removeColumn('Users', 'senha')
    ])
  }
};
