import MySQLContainer from "../../containers/sqlContainer";

/* 
    Que es un DAO?

    Data Access Object es el objeto que va comunicarse con la base de datos 
    Aqui se va a manejar todo lo pertinente los queries de cada tabla

    Lamentablemente no se puede hacer facilmente un objeto que modele como queremos los datos en la tabla correspondiente (para un futuro)

    Ejemplo:
*/
 class ABstractDAO extends MySQLContainer{
    constructor(table) { // Todos los datos necesitan de la tabla a la cual van a acceder al momento de instancearse
        super(table);
    }

    /*
     readById(id) {
        const querySql = `SELECT * FROM ?? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return new Promise((resolve, reject) => {
            this.query(querySql, [this.table, id])
                .then(results => {
                    if (results.length === 0) {
                        resolve(null); // O reject(new Error('No encontrado'))
                    } else {
                        resolve(results[0]);
                    }
                })
                .catch(reject);
        });
    }

    updateById(data) {
        const { id, ...fields } = data;
        if (id === undefined) {
            return Promise.reject(new Error('ID is required for modification'));
        }
        const querySql = `UPDATE ?? SET ? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor/objeto
        return this.query(querySql, [this.table, fields, id]);
    }

    deleteById(id) {
        const querySql = `DELETE FROM ?? WHERE id = ?`; // Usa ?? para el nombre de la tabla y ? para el valor
        return this.query(querySql, [this.table, id]);
    }
    
    
    
    */
}

// export default new ABstractDAO('tabla a consultar')