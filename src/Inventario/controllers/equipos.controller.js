import EquiposDAO from "../models/equiposDAO.js";

export default class EquiposController {
    dao = EquiposDAO;

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
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            const data = await this.dao.readById(id); // Llama a readById del DAO
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
            const { Modelo, Nombre, Descripcion, Codigo, Marca, Unidades } = req.body;
            if (!Modelo || !Nombre || !Descripcion || !Codigo || !Marca || !Unidades) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await this.dao.create([Modelo, Nombre, Descripcion, Codigo, Marca, Unidades]); // Llama a create del DAO
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
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await this.dao.deleteById(id); // Llama a deleteById del DAO
            res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}