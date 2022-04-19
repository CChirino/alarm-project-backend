module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contacts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      phone: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
    });
    return Contact;
  };
  