import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   
  const venta = await client.sql`SELECT * FROM Venta;`;
  return response.status(200).json({ ventas: venta.rows  });
}