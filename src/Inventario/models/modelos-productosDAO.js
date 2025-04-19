import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Modelos_Productos"


*/

class ModelosProductosDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Nombre, Descripcion, Codigo, Tipo_Producto, Tipo_Unidad, Unidades_Maximas, Unidades_Minimas)
                VALUES (?, ?, ?, ?, ?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async readById(id) { 
        try {
            const querySql = `SELECT * FROM ?? WHERE Id_Producto = ?;`;
            const [rows, fields] = await this.query(querySql, [this.table, id]); 
            return rows;
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateById(id, data) {
        try {
            const querySql = `UPDATE ?? SET ? WHERE Id_Producto = ?;`;
            const [rows, fields] = await this.query(querySql, [this.table, data, id]); 
            return rows;
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteById(id) {
        try {
            const querySql = `DELETE FROM ?? WHERE Id_Producto = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new ModelosProductosDAO('modelos_productos');