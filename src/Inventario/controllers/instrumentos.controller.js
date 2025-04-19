import InstrumentosDAO from "../models/instrumentosDAO.js";
import InstrumentosUbicacionDAO from "../models/instrumentos-ubicacionDAO.js";

export default class InstrumentosController {

    // Métodos para Instrumentos
    async getAll(req, res) {
        try {            
            const data = await InstrumentosDAO.readAll(); 
            if (!data || data.length == 0) {
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
            const data = await InstrumentosDAO.readById(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'Instrumento no encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const { Nombre, Descripcion, Tipo_Instrumento, Unidades, Unidades_Minimas, Unidades_Maximas } = req.body;
            if (!Nombre || !Descripcion || !Tipo_Instrumento || !Unidades || !Unidades_Minimas || !Unidades_Maximas) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await InstrumentosDAO.create([Nombre, Descripcion, Tipo_Instrumento, Unidades, Unidades_Minimas, Unidades_Maximas]);
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
            const data = await InstrumentosDAO.updateById(id, updateData);
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
            await InstrumentosDAO.deleteById(id);
            res.status(200).json({ message: 'Instrumento eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Métodos para InstrumentosUbicacion
    async getAllUbicaciones(req, res) {
        try {
            const data = await InstrumentosUbicacionDAO.readAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUbicacionesByInstrumentoId(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID del instrumento es requerido' });
            }
            const data = await InstrumentosUbicacionDAO.readByInstrumentoId(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No se encontraron ubicaciones para este instrumento' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUbicacionesByUbicacionId(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID de la ubicación es requerido' });
            }
            const data = await InstrumentosUbicacionDAO.readByUbicacionId(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No se encontraron instrumentos en esta ubicación' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createUbicacion(req, res) {
        try {
            const { Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion } = req.body;
            if (!Unidades_Por_Ubicacion || !Id_Instrumento || !Id_Ubicacion) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await InstrumentosUbicacionDAO.create([Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion]);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUbicacionById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await InstrumentosUbicacionDAO.updateById(id, updateData);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUbicacionById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await InstrumentosUbicacionDAO.deleteById(id);
            res.status(200).json({ message: 'Ubicación eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}