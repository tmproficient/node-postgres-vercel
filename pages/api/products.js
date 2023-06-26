import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   
  const productos = await client.sql`SELECT * FROM productos;`;
  return response.status(200).json({ productos: productos.rows  });
}