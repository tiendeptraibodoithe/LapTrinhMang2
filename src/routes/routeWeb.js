const express = require("express");
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/login", homeController.getLogin);
  router.get("/signup", homeController.getSignUp);
  router.post("/postUser", userController.handleCreateUser);
  router.get("/home", userController.handleLogin);

  return app.use("/", router);
};
module.exports = initWebRoutes;
