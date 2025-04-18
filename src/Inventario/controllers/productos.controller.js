import productosDao from "../models/productosDAO.js";

export default class ProductosController {
    dao = productosDao; 

   
    async getAll(req, res) {
        try {
            const data = await this.dao.readAll();
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
    
}