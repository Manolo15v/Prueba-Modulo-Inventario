import dotenv from "dotenv";

dotenv.config()

export default {
    // Objeto que tiene todas las credenciales para acceder a la base de datos
    mysql: {
        host: process.env.DBHOST || 'localhost',
        user: process.env.DBUSER || 'root',
        password: process.env.DBPASSWORD || '',
        database: 'prueba_inventario'
    }
};