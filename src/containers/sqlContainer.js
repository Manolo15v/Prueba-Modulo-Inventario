import mysql from 'mysql';
import config from '../config/database.config.js';

const dbconfig = config.mysql;

export default class MySQLContainer {
    constructor() {
        this.connection = null;
        this.connect();
    }

    connect() {
        this.connection = mysql.createConnection({
            host: dbconfig.host,
            user: dbconfig.user,
            password: dbconfig.password,
            database: dbconfig.database,
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err);
                // Handle connection errors appropriately, maybe retry or throw
                setTimeout(() => this.connect(), 2000); // Retry connection after 2 seconds
                return;
            }
            console.log('Connected to the database');
        });

        this.connection.on('error', (err) => {
            console.error('Database error:', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT') {
                console.log('Reconnecting to the database...');
                this.connect(); // Reconnect on connection loss
            } else {
                throw err; // Throw other errors
            }
        });
    }

    query(sql, params) {
        return new Promise((resolve, reject) => {
            if (!this.connection) {
                 console.error('Database connection not established.');
                 return reject(new Error('Database connection not established.'));
            }
            this.connection.query(sql, params, (error, results) => {
                if (error) {
                    console.error('Error executing query:', error);
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    todos(tabla) {
        const querySql = `SELECT * FROM ??`; // Use ?? for table names
        return this.query(querySql, [tabla]);
    }

    uno(tabla, id) {
        const querySql = `SELECT * FROM ?? WHERE id = ?`; // Use ?? for table names and ? for values
         return new Promise((resolve, reject) => {
            this.query(querySql, [tabla, id])
                .then(results => {
                    if (results.length === 0) {
                        resolve(null); // Or reject(new Error('Item not found')) depending on desired behavior
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    agregar(tabla, data) {
        const querySql = `INSERT INTO ?? SET ?`; // Use ?? for table names and ? for object data
        return this.query(querySql, [tabla, data]);
    }

    eliminar(tabla, id) {
        const querySql = `DELETE FROM ?? WHERE id = ?`; // Use ?? for table names and ? for values
        return this.query(querySql, [tabla, id]);
    }

    modificar(tabla, data) {
        const { id, ...fields } = data;
        if (id === undefined) {
             return Promise.reject(new Error('ID is required for modification'));
        }
        const querySql = `UPDATE ?? SET ? WHERE id = ?`; // Use ?? for table names and ? for values/objects
        return this.query(querySql, [tabla, fields, id]);
    }
}