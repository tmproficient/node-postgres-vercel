import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
   //Cuáles son las ventas que se vencen hoy? Ver su detalle
   
  const productos = await client.sql`SELECT v.venta_id, c.nombre AS cliente, p.nombre AS producto, v.fecha_venta, v.cantidad, v.precio_total, v.fecha_vencimiento
  FROM Venta v
  JOIN Clientes c ON v.cliente_id = c.cliente_id
  JOIN Productos p ON v.producto_id = p.producto_id
  WHERE v.fecha_vencimiento = CURRENT_DATE;`;
  
  return response.status(200).json({ productos: productos.rows  });
}