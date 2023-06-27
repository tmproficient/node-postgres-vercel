import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   //clientes
  const clientes = await client.sql`SELECT * FROM Clientes;`;
  return response.status(200).json({ clientes: clientes.rows  });
}