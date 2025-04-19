import { Router } from "express";
import RepuestosController from "../controllers/repuestos.controller.js";

class RepuestosRouter {
    constructor() {
        this.router = Router();
        this.controller = new RepuestosController(); // Instancia del controlador
    }

    start() {
        // Rutas para Repuestos
        this.router.get("/", this.controller.getAll); // Obtener todos los repuestos
        this.router.get("/:id", this.controller.getById); // Obtener un repuesto por ID
        this.router.post("/", this.controller.create); // Crear un repuesto
        this.router.put("/:id", this.controller.updateById); // Actualizar un repuesto por ID
        this.router.delete("/:id", this.controller.deleteById); // Eliminar un repuesto por ID

        return this.router;
    }
}

export default new RepuestosRouter();