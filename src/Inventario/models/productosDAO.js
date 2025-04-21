import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Productos" como principal 


*/

class ProductosDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Id_modelo_productos, Unidades, Fecha_Vencimiento) VALUES (?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async readAllProductos() {
        try {
            const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
                FROM ?? p
                JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto;`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
    
            const [rows, fields] = await this.query(querySql, [this.table]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async readById(id) { 
        try {
            const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
                FROM ?? p
                JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto 
                WHERE p.Id_Producto = ?`;
    
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }

    }

    async readByModeloId(id) { 
        try {
            const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
                FROM ?? p
                JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto 
                WHERE p.Id_modelo_productos = ?`;
    
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

            const querySql = `UPDATE ?? SET ? WHERE Id_Producto = ?`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
            const [rows, fields] = await this.query(querySql, [this.table, data, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            const querySql = `DELETE FROM ?? WHERE Id_Producto = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new ProductosDAO('productos');