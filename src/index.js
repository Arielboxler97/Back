// index.js

const express = require('express');
const { sequelize, models } = require('./models');  // Ajusta la ruta según tu estructura

const app = express();

// Configuración de rutas y lógica de la aplicación...

// Sincronizar la base de datos y configurar asociaciones
sequelize.sync().then(async () => {
  // Configurar asociaciones
  Object.values(models).forEach((model) => {
    if (model.associate) {
      model.associate(models);
    }
  });

  // Escuchar en un puerto específico
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});