import repuestosDAO from "../models/repuestosDAO.js";

export default class RepuestosController {
    dao = repuestosDAO;

    async getAll(req, res) {
        try {
            const data = await this.dao.readAll(); // Asegúrate de que readAll esté implementado en el DAO
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
            const data = await this.dao.readById(id);
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
            const { Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Modelo, Id_Ubicacion } = req.body;
            if (!Nombre || !Descripcion || !Numero_de_Pieza || !Unidades || !Unidades_Minimas || !Unidades_Maximas || !Id_Modelo || !Id_Ubicacion) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await this.dao.create([Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Modelo, Id_Ubicacion]);
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
            const data = await this.dao.updateById(id, updateData);
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
            const data = await this.dao.deleteById(id);
            res.status(200).json({ message: 'Eliminado correctamente', data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}