module.exports = {
  HOST: "127.0.0.1",
  USER: "cchirino",
  PASSWORD: "Chacao14397!",
  DB: "alarma-project",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
