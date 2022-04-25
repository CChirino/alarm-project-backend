module.exports = {
  HOST: "us-cdbr-east-05.cleardb.net",
  USER: "b16bbf6f12083b",
  PASSWORD: "a3c051c4",
  DB: "heroku_e0a93780ca911e2",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};