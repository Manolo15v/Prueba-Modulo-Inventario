import MySQLContainer from "../../containers/sqlContainer";

/*
    Este objeto maneja el acceso a los datos de la tabla "Modelos_Equipos" como principal
    ToDo poner un metodo para buscar todo los equipos segun su ubicacion

*/

class EquiposDAO extends MySQLContainer{
    constructor(table){
        super(table);
    }

    create(data) {
        const querySql = `INSERT INTO ?? (Modelo, Nombre, Descripcion, Codigo, Marca, Unidades) 
            VALUES (?, ?, ?, ?, ?, ?);`; // Usa ?? para el nombre de la tabla y ? para el objeto data 
        return this.query(querySql, [this.table, ...data]);
    }

    readById(id) { 
        const querySql = "SELECT * FROM ?? WHERE Id_Modelo = ?";

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
        const querySql = `UPDATE ?? SET ? WHERE Id_Modelo = ?`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto

        return this.query(querySql, [this.table, data, id]);
    }

    deleteById(id) {
        const querySql = `DELETE FROM ?? WHERE Id_Modelo = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, id]);
    }
}

export default new EquiposDAO('Modelos_Equipos');