import MySQLContainer from "../../containers/sqlContainer.js";


/*
    Este objeto maneja el acceso a los datos de la tabla "Productos_Ubicacion"


*/

class ProductosUbicacionDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    async create(data) {
        try {
            const querySql = `INSERT INTO ?? (Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion) VALUES (?, ?, ?)`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
            const [rows, fields] = await this.query(querySql, [this.table, ...data]);
            return rows;
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async readAll() { 
        try {
            const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
            FROM ?? pu
            JOIN Productos p ON pu.Id_Producto = p.Id_Producto
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
            JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion;`;
            const [rows, fields] = await this.query(querySql, [this.table]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async readByModeloProductoId(id) { 
        try {
            const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
            FROM ?? pu
            JOIN Productos p ON pu.Id_Producto = p.Id_Producto
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
            JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion
            WHERE mp.Id_Producto = ?;`;

            const [rows, fields] = await this.query(querySql, [this.table, id])
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async readByUbicacionId(id) { 
        try {
            const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
            FROM ?? pu
            JOIN Productos p ON pu.Id_Producto = p.Id_Producto
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
            JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion
            WHERE a.Id_Ubicacion = ?;`;
    
            const [rows, fields] = await this.query(querySql, [this.table, id]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async updateById(idProducto, idUbicacion, data) {
        try {
            if (id === undefined) {
                throw new Error('ID es requerido para la modificacion');
            }
            const querySql = `UPDATE ?? SET ? WHERE Id_Producto = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
    
            const [rows, fields] = await this.query(querySql, [this.table, data, idProducto,  idUbicacion]);
            return rows;

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(idProducto, idUbicacion,) {
        try {
            const querySql = `DELETE FROM ?? WHERE WHERE Id_Producto = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
            const [rows, fields] = await this.query(querySql, [this.table, idProducto,  idUbicacion]);
            return rows;

        } catch (error) {   
            throw new Error(error)
        }
    }
}

export default new ProductosUbicacionDAO('productos_ubicacion');