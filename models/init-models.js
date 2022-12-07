const DataTypes = require("sequelize").DataTypes;
const _Alumno = require("./alumno");
const _Nacionalidad = require("./nacionalidad");

function initModels(sequelize) {
   const Alumno = _Alumno(sequelize, DataTypes);
   const Nacionalidad = _Nacionalidad(sequelize, DataTypes);

   Alumno.belongsTo(Nacionalidad, {
      as: "id_nationality_nacionalidad",
      foreignKey: "id_nationality",
   });
   Nacionalidad.hasMany(Alumno, {
      as: "alumnos",
      foreignKey: "id_nationality",
   });

   return {
      Alumno,
      Nacionalidad,
   };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
