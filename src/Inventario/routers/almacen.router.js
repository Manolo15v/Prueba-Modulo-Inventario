import { Router } from "express";
import AlmacenController from "../controllers/almacen.controller.js"; // Asegúrate de que la ruta sea correcta

class AlmacenRouter {
    constructor() {
        this.router = Router();
        this.controller = new AlmacenController(); // Instancia del controlador
    }

    start() {
        this.router.get("/", (req, res) => this.controller.getAll(req, res)); // Obtener todos los registros
        this.router.get("/:id", (req, res) => this.controller.getById(req, res)); // Obtener un registro por ID
        this.router.get("/area/:area", (req, res) => this.controller.getByArea(req, res)); // Obtener registros por área
        this.router.post("/", (req, res) => this.controller.create(req, res)); // Crear un nuevo registro
        this.router.put("/:id", (req, res) => this.controller.updateById(req, res)); // Actualizar un registro por ID
        this.router.delete("/:id", (req, res) => this.controller.deleteById(req, res)); // Eliminar un registro por ID

        return this.router;
    }
}


export default new AlmacenRouter();
