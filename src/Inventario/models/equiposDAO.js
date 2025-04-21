import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "equipos" como principal
    ToDo poner un metodo para buscar todo los equipos segun su ubicacion

*/

class EquiposDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Fecha_Instalacion, Estado, Frecuencia_mantenimiento, Numero_de_serie, Id_Modelo, Id_Ubicacion)
            VALUES (?, ?, ?, ?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async readAll() {
        try {
            const querySql = `SELECT e.*, me.Modelo, me.Nombre AS Nombre_Modelo, me.Marca, a.Area, a.Ubicacion
            FROM ?? e
            JOIN Modelos_Equipos me ON e.Id_Modelo = me.Id_Modelo
            JOIN almacenes_ubicaciones a ON e.Id_Ubicacion = a.Id_Ubicacion;`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async readById(id) { 
        try {
            const querySql = `SELECT e.*, me.Modelo, me.Nombre AS Nombre_Modelo, me.Marca, a.Area, a.Ubicacion
            FROM ?? e
            JOIN Modelos_Equipos me ON e.Id_Modelo = me.Id_Modelo
            JOIN almacenes_ubicaciones a ON e.Id_Ubicacion = a.Id_Ubicacion
            WHERE e.Id_Equipo = ?;`;

            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async readByModeloId(id) { 
        try {
            const querySql = `SELECT e.*, me.Modelo, me.Nombre AS Nombre_Modelo, me.Marca, a.Area, a.Ubicacion
            FROM ?? e
            JOIN Modelos_Equipos me ON e.Id_Modelo = me.Id_Modelo
            JOIN almacenes_ubicaciones a ON e.Id_Ubicacion = a.Id_Ubicacion
            WHERE me.Id_Modelo = ?;`;
            
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    // async readByEstado(estado) { 
    //     try {
    //         const querySql = `SELECT * FROM ?? WHERE Estado = ?;`;
    //         const [rows, fields] = await this.query(querySql, [this.table, estado]);
    //         return rows;

    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // }

    async updateById(id, data) {
        try {
            if (id === undefined) {
                throw new Error('ID es requerido para la modificacion');
            }

            const querySql = `UPDATE ?? SET ? WHERE Id_Equipo = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
            const [rows, fields] = await this.query(querySql, [this.table, data, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            if (id === undefined) {
                throw new Error('ID es requerido para el borrado');
            }

            const querySql = `DELETE FROM ?? WHERE Id_Equipo = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new EquiposDAO('equipos');