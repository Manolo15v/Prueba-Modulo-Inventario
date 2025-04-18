import MySQLContainer from "../../containers/sqlContainer.js";

/*
    Este objeto maneja el acceso a los datos de la tabla "Productos_Ubicacion"


*/

class ProductosUbicacionDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    create(data) {
        const querySql = `INSERT INTO ?? (Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion) VALUES (?, ?, ?)`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
        return this.query(querySql, [this.table, ...data]);
    }

    readAll() { 
        const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
        FROM ?? pu
        JOIN Productos p ON pu.Id_Producto = p.Id_Producto
        JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
        JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion;`;

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

    readByModeloProductoId(id) { 
        const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
        FROM ?? pu
        JOIN Productos p ON pu.Id_Producto = p.Id_Producto
        JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
        JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion
        WHERE mp.Id_Producto = ?;`;

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
        const querySql = `SELECT pu.*, p.Fecha_Vencimiento, mp.Nombre AS Nombre_Producto, a.Area, a.Ubicacion
        FROM ?? pu
        JOIN Productos p ON pu.Id_Producto = p.Id_Producto
        JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto
        JOIN Almacen_Ubicacion a ON pu.Id_Ubicacion = a.Id_Ubicacion
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

    updateById(idProducto, idUbicacion, data) {
        if (id === undefined) {
            return Promise.reject(new Error('ID es requerido para la modificacion'));
        }
        const querySql = `UPDATE ?? SET ? WHERE Id_Producto = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto

        return this.query(querySql, [this.table, data, idProducto,  idUbicacion]);
    }

    deleteById(idProducto, idUbicacion,) {
        const querySql = `DELETE FROM ?? WHERE WHERE Id_Producto = ? AND Id_Ubicacion = ?;`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, idProducto,  idUbicacion]);
    }
}

export default new ProductosUbicacionDAO('Productos_Ubicacion');