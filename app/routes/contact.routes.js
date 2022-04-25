const contact = require("../controllers/contact.controller.js");
  module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/", contact.create);
    // Retrieve all Contacts
    app.get("/", contact.findAll);
    // Retrieve a single Contacts with id
    app.get("/:id", contact.findOne);
    // Update a Contacts with id
    app.put("/:id", contact.update);
    // Delete a Contacts with id
    app.delete("/:id", contact.delete);
    // Delete all  Contacts
    app.delete("/", contact.deleteAll);
  };
  