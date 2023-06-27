import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   // que ventas tiene x cliente
  const datos = await client.sql`SELECT v.venta_id, c.nombre AS cliente, p.nombre AS producto, v.fecha_venta, v.cantidad, v.precio_total, v.fecha_vencimiento
  FROM Venta v
  JOIN Clientes c ON v.cliente_id = c.cliente_id
  JOIN Productos p ON v.producto_id = p.producto_id
  WHERE c.cliente_id = 2;`;
  return response.status(200).json({ ventas: datos.rows  });
}