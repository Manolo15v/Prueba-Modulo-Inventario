import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Modelos_Equipos" como principal
    ToDo poner un metodo para buscar todo los equipos segun su ubicacion

*/

class EquiposDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Modelo, Nombre, Descripcion, Codigo, Marca, Unidades) 
                VALUES (?, ?, ?, ?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async readById(id) { 
        try {
            const querySql = `SELECT * FROM ?? WHERE Id_Modelo = ?;`;
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

            const querySql = `UPDATE ?? SET ? WHERE Id_Modelo = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
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

            const querySql = `DELETE FROM ?? WHERE Id_Modelo = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new EquiposDAO('modelos_equipos');