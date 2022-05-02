const contact = require("../controllers/contact.controller.js");
const { authJwt } = require("../middleware");

  module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post(
    "/api/contacts",     
    [authJwt.verifyToken],
    contact.create);
    // Retrieve all Contacts
    app.get("/api/contacts", contact.findAll);
    // Retrieve a single Contacts with id
    app.get("/api/contacts/:id", contact.findOne);
    // Update a Contacts with id
    app.put("/api/contacts/:id", contact.update);
    // Delete a Contacts with id
    app.delete("/api/contacts/:id", contact.delete);
    // Delete all  Contacts
    app.delete("/api/contacts/", contact.deleteAll);
  };
  