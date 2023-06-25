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

  
// Ejemplo de consulta a la base de datos
client.query('SELECT * FROM clientes', (err, res) => {
  if (err) {
    console.error('Error al ejecutar la consulta', err);
  } else {
    console.log('Resultados de la consulta:', res.rows);
  }
  
  // Cerrar la conexión a la base de datos al finalizar
  client.end();
});

module.exports=client