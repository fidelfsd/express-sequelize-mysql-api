const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   process.env.MYSQL_DATABASE || config.development.database,
   process.env.MYSQL_USER || config.development.username,
   process.env.MYSQL_PASSWORD || config.development.password,
   {
      host: process.env.MYSQL_HOST || config.development.host,
      port: process.env.MYSQL_PORT || config.development.port || "3306",
      dialect: "mysql",
   }
);

(async () => {
   const db = await sequelize.authenticate();
   console.log(
      `MYSQL connected to ${
         process.env.MYSQL_DATABASE || config.development.database
      }`
   );
   module.exports = db;
})();

// module.exports = sequelize.authenticate().then((db) => {
//    console.log("MYSQL connected");
//    return db;
// });
