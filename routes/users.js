var express = require("express");
var router = express.Router();

const AlumnoController = require("../controllers/alumno-controller");

/* GET users listing. */
router.get("/", AlumnoController.getAll);

/* GET user by id. */
router.get("/:id", AlumnoController.getById);

/* GET users by name. */
router.get("/name/:name", AlumnoController.getByName);

module.exports = router;
