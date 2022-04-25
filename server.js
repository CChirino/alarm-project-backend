//  HEADER
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();
// HEADER

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Alarm project application." });
});
// set port, listen for requests
app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port 3000');
  
  });
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "contact"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/contact.routes')(app);
// set port, listen for requests