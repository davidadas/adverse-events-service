const path = require('path');
const sequelizeMockingMocha = require('sequelize-mocking').sequelizeMockingMocha;
const { instance } = require('../../api/models');

/**
 * Initializes a dummy database for testing.
 */
const loadMockDatabase = () => sequelizeMockingMocha(
  instance,
  path.resolve(path.join(__dirname, './adverseEvents.json')),
  { logging: false },
);

module.exports = {
  loadMockDatabase,
};
