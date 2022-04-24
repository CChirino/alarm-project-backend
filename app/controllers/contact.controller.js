const db = require("../models");
const Contact = db.contact;
const Op = db.Sequelize.Op;

// Create and Save a new Contact
exports.create = (req, res) => {
    // Validate request
    if (!req.body.phone) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      // Create a Contact
      const contact = {
        phone: req.body.title,
        name: req.body.description,
        lastname: req.body.published  
      };
      // Save Tutorial in the database
      Contact.create(contact)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};
// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
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
// Find a single Contact with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Contact.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};
// Update a Contact by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Contact.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contact was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Contact with id=${id}. Maybe Contact was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Contact.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contact was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contact with id=" + id
      });
    });
};
// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
    Contact.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};


