module.exports = {
  // Service-Level Configs.
  application: {
    port: 8080,
    maxResults: 50,
    defaultResults: 25,
  },
  authentication: {
    secret: 'shhhhhh',
  },
  // Database-Level Configs.
  postgres: {
    host: 'localhost',
    database: 'adverse_events',
    port: 5432,
    username: 'postgres',
    password: '',
    dialect: 'postgres',
  },
};
