import mysql from 'mysql';
import { mysql as dbconfig } from '../config/database.config.js';

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

    connect() {
        // Funcion para establecer la coneccion con la base de datos, no retorna nada
        this.connection = mysql.createConnection(dbconfig);

        this.connection.connect((err) => { //Maneja los error al intentar conectarse
            if (err) {
                console.error('Error conectandose a la base de datos', err);
                //setTimeout(() => this.connect(), 2000); // Reintenta la coneccion despues de 2 segundos
                return;
            }
            console.log('Conectado a la base de datos');
        });

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

    query(sql, params) {
        return new Promise((resolve, reject) => {
            if (!this.connection) {
                console.error('La coneccion a la base de datos no ha sido establesida');
                return reject(new Error('La coneccion a la base de datos no ha sido establesida'));
            }

            this.connection.query(sql, params, (error, results) => {
                if (error) {
                    console.error('Error ejecutando el query:', error);
                    return reject(error);
                }

                resolve(results);
            });
        });
    }

    readAll() {
        const querySql = `SELECT * FROM ??`; // Usa ?? para el nombre de la tabla 
        return this.query(querySql, [this.table]);
    }
    
    /*
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