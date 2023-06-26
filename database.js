const { Client } = require('pg');

// Configuración de la conexión a la base de datos
const client = new Client({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

// Conexión a la base de datos
client.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos', err);
  });

 
module.exports=client