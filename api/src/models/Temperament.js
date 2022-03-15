const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      primaryKey: true
    }
    
    
  }, { timestamps: false});
};
