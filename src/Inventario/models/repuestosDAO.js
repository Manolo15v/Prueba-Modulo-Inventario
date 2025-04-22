import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Repuestos"


*/

class RepuestosDAO extends MySQLContainer{
    constructor(table = 'repuestos'){
        super(table);
    }

    async readAll() {
        try {
            const querySql = `SELECT r.*, a.Area, a.Ubicacion
            FROM ?? r
            JOIN almacenes_ubicaciones a ON r.Id_Ubicacion = a.Id_Ubicacion;`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }

    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ? (Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Modelo, Id_Ubicacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async readById(id) {        
        try {
            const querySql = `SELECT * FROM ?? WHERE Id_Repuesto = ?;`;
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }

    }

    async updateById(id, data) {
        try {
            if (id === undefined) {
                throw new Error('ID es requerido para la modificacion');
            }

            const querySql = `UPDATE ?? SET ? WHERE Id_Repuesto = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
            const [rows, fields] = await this.query(querySql, [this.table, data, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            const querySql = `DELETE FROM ?? WHERE Id_Repuesto = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new RepuestosDAO('repuestos');