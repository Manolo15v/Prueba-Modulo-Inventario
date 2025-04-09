import mysql from 'mysql';
import config from '../config/database.config.js';

const dbconfig = config.mysql;

let connection;

function conMysql() {
    connection = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.database,
    });
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database');
    });
}

conMysql();

function Todos(tabla) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${tabla}`;
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${tabla} WHERE id = ?`;
        connection.query(query, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function agragar(tabla, data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${tabla} SET ?`;
        connection.query(query, data, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function eliminar(tabla, id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${tabla} WHERE id = ?`;
        connection.query(query, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function modificar(tabla, data) {
    return new Promise((resolve, reject) => {
        const { id, ...fields } = data;
        const query = `UPDATE ${tabla} SET ? WHERE id = ?`;
        connection.query(query, [fields, id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

export default {
    Todos,
    uno,
    agragar,
    eliminar,
    modificar
};