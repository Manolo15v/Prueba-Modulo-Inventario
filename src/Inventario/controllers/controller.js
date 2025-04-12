/*
    Los controladoes majean las peticiones http 
    Van a ser objetos estaticos para mayor facilidad donde cada metodo maneje la peticion de un endpoint
    Cada controlador va a estar asociado a uno o varios dao para el manejo de datos en la base de datos

*/

export default class AbstractController {
    constructor() {
        this.dao = null; 
    }

    /* 
    Esto es un ejemplo de como el controlador majena las peticiones http 
    Cada metodo maneja una peticion http y llama al dao correspondiente para obtener o modificar los datos
    Los metodos dentro del controlador solo tienen logica de negocio y no tienen logica de acceso a datos

    async getAll(req, res) {
        try {
            const data = await this.dao.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await this.dao.getById(id);
            if (!data) {
                return res.status(404).json({ error: 'Not found' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const newData = req.body;
            const data = await this.dao.create(newData);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    */
}