const db = require("../models");
const Status = db.status;
const Op = db.Sequelize.Op;

exports.buttonON = (req, res) => {
    const phone = req.query.phone;
  var condition = phone ? { phone: { [Op.like]: `%${phone}%` } } : null;
  Contact.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.buttonOff = (req, res) => {
    const phone = req.query.phone;
  var condition = phone ? { phone: { [Op.like]: `%${phone}%` } } : null;
  Contact.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};