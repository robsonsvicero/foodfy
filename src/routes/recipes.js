const express = require("express");
const routes = express.Router();
const multer = require("../app/middlewares/multer");

const RecipeController = require("../app/controllers/RecipeController");
const { onlyUsers } = require("../app/middlewares/session");
const RecipeValidator = require("../app/validators/recipe");

routes.get("/", onlyUsers, RecipeController.list);
routes.get("/create", onlyUsers, RecipeController.create);
routes.get("/:id", onlyUsers, RecipeController.show);
routes.get("/:id/edit", onlyUsers, RecipeValidator.edit, RecipeController.edit);
routes.post("/", onlyUsers, multer.array("photos", 5), RecipeController.post);
routes.put("/", onlyUsers, multer.array("photos", 5), RecipeValidator.putOrDelete, RecipeController.put);
routes.delete("/", onlyUsers, RecipeValidator.putOrDelete, RecipeController.delete);

module.exports = routes;