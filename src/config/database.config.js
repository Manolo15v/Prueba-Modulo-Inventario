import dotenv from "dotenv";

dotenv.config()


export default {
    // The port the app runs on
    mysql: {
        host: process.env.DBHOST || 'localhost',
        user: process.env.DBHOST || 'root',
        password: process.env.DBHOST || '',
        database: 'inventario'
    }
};