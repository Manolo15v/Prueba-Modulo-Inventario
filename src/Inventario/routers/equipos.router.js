import { Router } from "express";
import EquiposController from "../controllers/equipos.controller.js";

class EquiposRouter {
    constructor() {
        this.router = Router();
        this.controller = new EquiposController();
    }

    start() {
        this.router.get("/", this.controller.getAll.bind(this.controller)); // Obtener todos los equipos
        this.router.get("/:id", this.controller.getById.bind(this.controller)); // Obtener un equipo por ID
        this.router.post("/", this.controller.create.bind(this.controller)); // Crear un nuevo equipo
        this.router.put("/:id", this.controller.updateById.bind(this.controller)); // Actualizar un equipo por ID
        this.router.delete("/:id", this.controller.deleteById.bind(this.controller)); // Eliminar un equipo por ID

        return this.router;
    }
}

export default new EquiposRouter();
