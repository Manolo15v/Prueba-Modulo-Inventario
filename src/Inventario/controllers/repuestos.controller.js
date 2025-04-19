import repuestosDAO from "../models/repuestosDAO.js";

export default class RepuestosController {

    async getAll(req, res) {
        try {            
            const data = await repuestosDAO.readAll(); 
            if (!data) {
                return res.status(404).json({ error: 'No encontrado' });
            }
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
            const data = await repuestosDAO.readById(id);
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
            const data = await repuestosDAO.create([Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Modelo, Id_Ubicacion]);
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
            const data = await repuestosDAO.updateById(id, updateData);
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
            const data = await repuestosDAO.deleteById(id);
            res.status(200).json({ message: 'Eliminado correctamente', data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}