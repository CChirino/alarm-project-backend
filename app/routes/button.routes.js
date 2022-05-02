const button = require("../controllers/button.controller.js");
  module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/api/button-on", button.create);
    app.get("/api/button-off", button.findAll);
  };
  