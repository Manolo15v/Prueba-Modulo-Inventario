import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Instrumentos_Ubicacion"


*/

class InstrumentosUbicacionDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    create(data) {
        const querySql = `INSERT INTO ?? (Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion) VALUES (?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
        return this.query(querySql, [this.table, ...data]);
    }

    readAll() { 
        const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
        FROM ?? iu
        JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
        JOIN Almacen_Ubicacion a ON iu.Id_Ubicacion = a.Id_Ubicacion;`;

        return new Promise((resolve, reject) => {
            this.query(querySql, [this.table, ...data])
                .then(results => {
                    if (results.length === 0) {
                        reject(new Error('No encontrado'))
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    readByInstrumentoId(id) { 
        const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
        FROM ?? iu
        JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
        JOIN Almacen_Ubicacion a ON iu.Id_Ubicacion = a.Id_Ubicacion 
        WHERE i.Id_Instrumento = ?;`;

        return new Promise((resolve, reject) => {
            this.query(querySql, [this.table, id])
                .then(results => {
                    if (results.length === 0) {
                        reject(new Error('No encontrado'))
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    readByUbicacionId(id) { 
        const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
        FROM ?? iu
        JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
        JOIN Almacen_Ubicacion a ON iu.Id_Ubicacion = a.Id_Ubicacion 
        WHERE a.Id_Ubicacion = ?;`;

        return new Promise((resolve, reject) => {
            this.query(querySql, [this.table, id])
                .then(results => {
                    if (results.length === 0) {
                        reject(new Error('No encontrado'))
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    updateById(idInstrumento, idUbicacion, data) {
        if (id === undefined) {
            return Promise.reject(new Error('ID es requerido para la modificacion'));
        }
        const querySql = `UPDATE ?? SET ? WHERE Id_Instrumento = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto

        return this.query(querySql, [this.table, data, idInstrumento, idUbicacion]);
    }

    deleteById(idInstrumento, idUbicacion) {
        const querySql = `DELETE FROM ?? WHERE Id_Instrumento = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, idInstrumento, idUbicacion]);
    }
}

export default new InstrumentosUbicacionDAO('Instrumentos_Ubicacion');