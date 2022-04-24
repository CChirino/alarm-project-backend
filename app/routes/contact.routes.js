const { authJwt } = require("../middleware");
const contacts = require("../controllers/contact.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  router.post("/", contacts.create);
  // Retrieve all Tutorials
  router.get("/", contacts.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", contacts.findOne);
  // Update a Tutorial with id
  router.put("/:id", contacts.update);
  // Delete a Tutorial with id
  router.delete("/:id", contacts.delete);
  // Delete all Tutorials
  router.delete("/", contacts.deleteAll);
};
