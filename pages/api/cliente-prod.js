import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   //  Qué productos posee un cliente?
  const productos = await client.sql`SELECT p.producto_id, p.nombre
  FROM Productos p
  JOIN Venta v ON p.producto_id = v.producto_id
  WHERE v.cliente_id = 2;`;

//pongo id 1 pero se pondria el valor que venga [ID_DEL_CLIENTE];`;


  return response.status(200).json({ productos: productos.rows  });
}