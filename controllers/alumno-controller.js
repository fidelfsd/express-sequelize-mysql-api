const { Alumno, Nacionalidad } = require("../models.js");
const { Op } = require("sequelize");

const AlumnoController = {};

AlumnoController.getAll = async (req, res) => {
   try {
      const data = await Alumno.findAll({
         include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
      });
      res.json(data);
   } catch (error) {
      res.status(500).send({
         message: "Some error occurred while retrieving users.",
      });
   }
};

AlumnoController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await Alumno.findByPk(id, {
         include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
      });

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find user with id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving user retrieving with id=${id}.`,
      });
   }
};

AlumnoController.getByName = async (req, res) => {
   const name = req.params.name;

   try {
      const data = await Alumno.findAll({
         where: { name: { [Op.like]: `%${name}%` } },
         include: [{ model: Nacionalidad, as: "id_nationality_nacionalidad" }],
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find user with name=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving user retrieving with name=${name}.`,
      });
   }
};
module.exports = AlumnoController;
