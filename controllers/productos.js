const client = require("../database");

 
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
  



