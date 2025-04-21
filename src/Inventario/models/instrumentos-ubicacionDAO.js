import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Instrumentos_Ubicacion"


*/

class InstrumentosUbicacionDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion) VALUES (?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }

    async readAll() { 
        try {
            const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
            FROM ?? iu
            JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
            JOIN almacenes_ubicaciones a ON iu.Id_Ubicacion = a.Id_Ubicacion;`;
    
            const [rows, fields] = await this.query(querySql, [this.table]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }

    async readByInstrumentoId(id) { 
        try {
            const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
            FROM ?? iu
            JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
            JOIN almacenes_ubicaciones a ON iu.Id_Ubicacion = a.Id_Ubicacion 
            WHERE i.Id_Instrumento = ?;`;
    
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }

    async readByUbicacionId(id) { 
        try {
            const querySql = `SELECT iu.*, i.Nombre AS Nombre_Instrumento, i.Tipo_Instrumento, a.Area, a.Ubicacion
            FROM ?? iu
            JOIN Instrumentos i ON iu.Id_Instrumento = i.Id_Instrumento
            JOIN almacenes_ubicaciones a ON iu.Id_Ubicacion = a.Id_Ubicacion 
            WHERE a.Id_Ubicacion = ?;`;
    
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateById(idInstrumento, idUbicacion, data) {
        try {
            if (idInstrumento === undefined || idUbicacion === undefined) {
                throw new Error('ID es requerido para la modificacion');
            }
            const querySql = `UPDATE ?? SET ? WHERE Id_Instrumento = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
    
            const [rows, fields] = await this.query(querySql, [this.table, data, idInstrumento, idUbicacion]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(idInstrumento, idUbicacion) {
        try {
            if (idInstrumento === undefined || idUbicacion === undefined) {
                throw new Error('ID es requerido para el borrado');
            }

            const querySql = `DELETE FROM ?? WHERE Id_Instrumento = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, idInstrumento, idUbicacion]);
            return rows;
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new InstrumentosUbicacionDAO('instrumentos_Ubicacion');