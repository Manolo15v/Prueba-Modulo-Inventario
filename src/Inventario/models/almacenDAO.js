import MySQLContainer from "../../containers/sqlContainer";

/* 
    Que es un DAO?

    Data Access Object es el objeto que va comunicarse con la base de datos 
    Aqui se va a manejar todo lo pertinente los queries de cada tabla

    Lamentablemente no se puede hacer facilmente un objeto que modele como queremos los datos en la tabla correspondiente (para un futuro)
*/
export default class AlmacenDAO extends MySQLContainer{
    constructor(){
        super();
    }

}