import dbconfig from '../config/database.config.js';
import mysql from 'mysql2/promise';


/*
    Los contenedores contienen logica de acceso a un servicio y funciones basicas del mismo para facilitar el uso del mismo 

    Este contenedor tiene la logica para el asceso y manejo de una base de datos MySQL
*/

export default class MySQLContainer {
    constructor(table) {
        this.connection = null;
        this.connect();
        this.table = table;
    }

    async connect() {
        // Funcion para establecer la coneccion con la base de datos, no retorna nada
        try {
            this.connection = mysql.createPool(dbconfig.mysql);

            await this.connection.getConnection();
            // console.log('Conectado a la base de datos');

        } catch (error) {
            console.error('Error conectandose a la base de datos', err);
            //setTimeout(() => this.connect(), 2000); // Reintenta la coneccion despues de 2 segundos
        }
               
        this.connection.on('error', (err) => { // Maneja el estado de la coneccion
            console.error('Error en la base de datos:', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT') {
                console.log('Reconectando a la base de datos');
                this.connect(); // Intenta la reconeccion
            } else {
                throw err; // Maneja otros errors
            }
        });
    }

    async query(sql, params) {
        try {
            if (!this.connection) {
                console.error('La coneccion a la base de datos no ha sido establesida');
                throw new Error('La coneccion a la base de datos no ha sido establesida');
            }
    
            return await this.connection.query(sql, params);
        } catch (error) {
            throw error;
        }
    }

    async readAll() {
        try {
            const querySql = `SELECT * FROM ??;`; // Usa ?? para el nombre de la tabla 
            const [rows, fields] = await this.query(querySql, [this.table]);
            
            return rows
        } catch (error) {
            console.error(error)
        }
    }
    
    /* Ejemplos de como hacer queries a la base de datos
    create(data) {
        const querySql = `INSERT INTO ?? SET ?`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
        return this.query(querySql, [this.table, data]);
    }


    readById(id) {
        const querySql = `SELECT * FROM ?? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return new Promise((resolve, reject) => {
            this.query(querySql, [this.table, id])
                .then(results => {
                    if (results.length === 0) {
                        resolve(null); // O reject(new Error('No encontrado'))
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    updateById(data) {
        const { id, ...fields } = data;
        if (id === undefined) {
            return Promise.reject(new Error('ID is required for modification'));
        }
        const querySql = `UPDATE ?? SET ? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
        return this.query(querySql, [this.table, fields, id]);
    }

    deleteById(id) {
        const querySql = `DELETE FROM ?? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, id]);
    }

    */
}