import { Router } from "express";
import InstrumentosController from "../controllers/instrumentos.controller.js"; // Asegúrate de que la ruta sea correcta

export default class InstrumentosRouter {
    constructor() {
        this.router = Router();
        this.controller = new InstrumentosController(); // Instancia del controlador
    }

    start() {
        // Rutas para Instrumentos
        this.router.get("/:id", (req, res) => this.controller.getById(req, res)); // Obtener un instrumento por ID
        this.router.post("/", (req, res) => this.controller.create(req, res)); // Crear un instrumento
        this.router.put("/:id", (req, res) => this.controller.updateById(req, res)); // Actualizar un instrumento por ID
        this.router.delete("/:id", (req, res) => this.controller.deleteById(req, res)); // Eliminar un instrumento por ID

        // Rutas para InstrumentosUbicacion
        this.router.get("/ubicaciones", (req, res) => this.controller.getAllUbicaciones(req, res)); // Obtener todas las ubicaciones de instrumentos
        this.router.get("/ubicaciones/instrumento/:id", (req, res) => this.controller.getUbicacionesByInstrumentoId(req, res)); // Obtener ubicaciones por ID de instrumento
        this.router.get("/ubicaciones/ubicacion/:id", (req, res) => this.controller.getUbicacionesByUbicacionId(req, res)); // Obtener ubicaciones por ID de ubicación
        this.router.post("/ubicaciones", (req, res) => this.controller.createUbicacion(req, res)); // Crear una ubicación de instrumento
        this.router.put("/ubicaciones/:id", (req, res) => this.controller.updateUbicacionById(req, res)); // Actualizar una ubicación de instrumento por ID
        this.router.delete("/ubicaciones/:id", (req, res) => this.controller.deleteUbicacionById(req, res)); // Eliminar una ubicación de instrumento por ID

        return this.router;
    }
}
