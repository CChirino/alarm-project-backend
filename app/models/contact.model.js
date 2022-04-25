module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contacts", {
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
  