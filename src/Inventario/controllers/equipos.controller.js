import ModelosEquiposDAO from "../models/modelos-equiposDAO.js";
import EquiposDAO from "../models/equiposDAO.js";

export default class EquiposController {

    //Metodos para Modelos Equipos
    async getAll(req, res) {
        try {
            const data = await ModelosEquiposDAO.readAll();
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
            const data = await ModelosEquiposDAO.readById(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createModelo(req, res) {
        try {
            const { Modelo, Nombre, Descripcion, Codigo, Marca, Unidades } = req.body;
            if (!Modelo || !Nombre || !Descripcion || !Codigo || !Marca || !Unidades) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await ModelosEquiposDAO.create([Modelo, Nombre, Descripcion, Codigo, Marca, Unidades]); 
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
            const data = await ModelosEquiposDAO.updateById(id, updateData); 
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
            await ModelosEquiposDAO.deleteById(id); 
            res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //Metodos para Equipos
    async getAllEquipos(req, res) {
        try {
            const data = await EquiposDAO.readAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getEquiposById(req, res) {
        try {
            const id = req.params.id;
            const data = await EquiposDAO.readByIdB(id); 
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getEquipoByModeloId(req, res) {
        try {
            const id = req.params.id;
            const data = await EquiposDAO.readByModeloId(id); 
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            const { FechaInstalacion, Estado, FrecuenciaMantenimiento, NumeroDeSerie, idModelo, idUbicacion } = req.body;
            if (!FechaInstalacion || !Estado || !FrecuenciaMantenimiento || !NumeroDeSerie || !idModelo || !idUbicacion) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await EquiposDAO.create([FechaInstalacion, Estado, FrecuenciaMantenimiento, NumeroDeSerie, idModelo, idUbicacion]); 
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateEquipoById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await EquiposDAO.updateById(id, updateData); 
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteEquipoById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await ModelosEquiposDAO.deleteById(id); 
            res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}