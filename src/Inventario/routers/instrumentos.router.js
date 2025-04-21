import { Router } from "express";
import InstrumentosController from "../controllers/instrumentos.controller.js"; // Asegúrate de que la ruta sea correcta

class InstrumentosRouter {
    constructor() {
        this.router = Router();
        this.controller = new InstrumentosController(); // Instancia del controlador
    }

    start() {// Ruta padre de los endpoints "/api/inventario/instrumentos"
        // Rutas para Instrumentos
        this.router.get("/", this.controller.getAll); // Obtener un instrumento todos los instrumentos
        this.router.get("/:id", this.controller.getById); // Obtener un instrumento por ID
        this.router.post("/", this.controller.create); // Crear un instrumento
        this.router.put("/:id", this.controller.updateById); // Actualizar un instrumento por ID
        this.router.delete("/:id", this.controller.deleteById); // Eliminar un instrumento por ID

        // Rutas para InstrumentosUbicacion
        this.router.get("/ubicaciones/instrumento/", this.controller.getAllUbicaciones); // Obtener todas las ubicaciones de instrumentos
        this.router.get("/ubicaciones/instrumento/:id", this.controller.getUbicacionesByInstrumentoId); // Obtener ubicaciones por ID de instrumento
        this.router.get("/ubicaciones/ubicacion/:id", this.controller.getUbicacionesByUbicacionId); // Obtener ubicaciones por ID de ubicación
        this.router.post("/ubicaciones", this.controller.createUbicacion); // Crear una ubicación de instrumento
        this.router.put("/ubicaciones/:id", this.controller.updateUbicacionById); // Actualizar una ubicación de instrumento por ID
        this.router.delete("/ubicaciones/:id", this.controller.deleteUbicacionById); // Eliminar una ubicación de instrumento por ID

        return this.router;
    }
}

export default new InstrumentosRouter();
