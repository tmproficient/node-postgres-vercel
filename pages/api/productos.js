import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   //productos
  const datos = await client.sql`SELECT * FROM Productos;`;
  return response.status(200).json({ productos: datos.rows  });
}