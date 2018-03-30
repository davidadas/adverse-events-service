const config = require('config');
const Sequelize = require('sequelize');

// Initalize our ORM Configs.
const dbConfigs = config.get('postgres');
const database = dbConfigs.get('database');
const username = dbConfigs.get('username');
const password = dbConfigs.get('password');
const options = {
  host: dbConfigs.get('host'),
  port: dbConfigs.get('port'),
  dialect: dbConfigs.get('dialect'),
  logging: false
};

// Initialize our ORM:
const instance = new Sequelize(database, username, password, options);

// Initialize our ORM Models:
const AdverseEvents = instance.import('adverse_events');
const Drugs = instance.import('drugs');
const PatientDrugs = instance.import('patient_drugs');
const PatientReactions = instance.import('patient_reactions');
const Patients = instance.import('patients');
const Reactions = instance.import('reactions');

module.exports = {
  AdverseEvents,
  Drugs,
  PatientDrugs,
  PatientReactions,
  Patients,
  Reactions,
  instance
};
