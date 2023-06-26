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
  





// exports.listAll = (req, res) => {
//     // console.log("entrando a listALL");
//     let data = new Array;
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
//     User.findAll({ where: condition }).then((user) => {
//         for (let i = 0; i < user.length; i++) {
//             data.push(user[i].dataValues)
//         }
//         let resultado = JSON.parse(JSON.stringify(data));
//         res.status(200).send({ resultado });
//     }).catch(error => {
//         console.log('error ' + error)
//         res.status(500).send({ error });
//     })
// }
