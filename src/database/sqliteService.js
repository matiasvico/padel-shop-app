import * as SQLite from 'expo-sqlite';

let db;

export const abrirDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('carrito.db');
  }
  return db;
};

export const crearTabla = async () => {
  const db = await abrirDB();
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS carrito (
      id INTEGER PRIMARY KEY NOT NULL,
      nombre TEXT,
      precio REAL,
      cantidad INTEGER
    );
  `);
};

export const guardarProducto = async (producto) => {
  const db = await abrirDB();
  await db.runAsync(
    `INSERT OR REPLACE INTO carrito (id, nombre, precio, cantidad) VALUES (?, ?, ?, ?);`,
    producto.id,
    producto.nombre,
    producto.precio,
    producto.cantidad
  );
};

export const obtenerProductos = async () => {
  const db = await abrirDB();
  const rows = await db.getAllAsync(`SELECT * FROM carrito`);
  return rows;
};

export const borrarProducto = async (id) => {
  const db = await abrirDB();
  await db.runAsync(`DELETE FROM carrito WHERE id = ?;`, id);
};

export const limpiarCarritoDB = async () => {
  const db = await abrirDB();
  await db.runAsync(`DELETE FROM carrito;`);
};

