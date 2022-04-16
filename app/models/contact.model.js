module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contacts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
    return Contact;
  };
  