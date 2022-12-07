const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Alumno.init(sequelize, DataTypes);
}

class Alumno extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    active: {
      type: DataTypes.ENUM('SI','NO'),
      allowNull: true
    },
    id_nationality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nacionalidad',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'alumno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_nationality",
        using: "BTREE",
        fields: [
          { name: "id_nationality" },
        ]
      },
    ]
  });
  }
}
