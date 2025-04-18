import almacenDAO from "../models/almacenDAO.js";

export default class AlmacenController {
    dao = almacenDAO;

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await this.dao.readById(id); // Llama a readById del DAO
            if (!data) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
                res.status(500).json({ error: error.message });
            }
    }
        
    async getByArea(req, res) {
        try {
            const area = req.params.area;
            const data = await this.dao.readByArea(area); // Llama a readByArea del DAO
            if (!data) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const { Area, Ubicacion } = req.body;
            if (!Area || !Ubicacion) {
                return res.status(400).json({ error: 'Area y Ubicacion son requeridos' });
            }
            const data = await this.dao.create([Area, Ubicacion]); // Pasa los datos como un array
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await this.dao.updateById(id, updateData); // Llama a updateById del DAO
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteById(req, res) {
        try {
            const id = req.params.id;
            const data = await this.dao.deleteById(id); // Llama a deleteById del DAO
            res.status(200).json({ message: 'Eliminado correctamente', data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}