import MySQLContainer from "../../containers/sqlContainer";

/*
    Este objeto maneja el acceso a los datos de la tabla "Productos" como principal 


*/

class ProductosDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    create(data) {
        const querySql = `INSERT INTO ?? (Id_modelo_productos, Unidades, Fecha_Vencimiento) VALUES (?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
        return this.query(querySql, [this.table, ...data]);
    }

    readAllProductos() {
        const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
            FROM ?? p
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto;`; // Usa ?? para el nombre de la tabla y ? para el objeto data 

        return this.query(querySql, []);
    }

    readById(id) { 
        const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
            FROM ?? p
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto 
            WHERE Id_Producto = ?`;

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

    readByModeloId(id) { 
        const querySql = `SELECT p.*, mp.Nombre, mp.Codigo, mp.Tipo_Producto
            FROM ?? p
            JOIN Modelos_Productos mp ON p.Id_modelo_productos = mp.Id_Producto 
            WHERE Id_modelo_productos = ?`;

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

    updateById(id, data) {

        if (id === undefined) {
            return Promise.reject(new Error('ID es requerido para la modificacion'));
        }
        const querySql = `UPDATE ?? SET ? WHERE Id_Producto = ?`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto

        return this.query(querySql, [this.table, data, id]);
    }

    deleteById(id) {
        const querySql = `DELETE FROM ?? WHERE Id_Producto = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, id]);
    }
}

export default new ProductosDAO('Productos');