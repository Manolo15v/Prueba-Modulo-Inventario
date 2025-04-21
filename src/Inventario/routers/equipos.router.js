import { Router } from "express";
import EquiposController from "../controllers/equipos.controller.js";

class EquiposRouter {
    constructor() {
        this.router = Router();
        this.controller = new EquiposController();
    }

    start() {// Ruta padre de los endpoints "/api/inventario/equipos"

        //Rutas para Equipos
        this.router.get("/equipos/", this.controller.getAllEquipos); // Obtener todos los modelos equipos
        this.router.get("/equipos/:id", this.controller.getEquiposById); // Obtener un modelos equipo por ID
        this.router.get("/equipos/:id", this.controller.getEquipoByModeloId); // Obtener un modelos equipo por ID
        this.router.post("/equipos/", this.controller.createProducto); // Crear un nuevo modelos equipo
        this.router.put("/equipos/:id", this.controller.updateEquipoById); // Actualizar un modelo equipo por ID
        this.router.delete("/equipos/:id", this.controller.deleteEquipoById); // Eliminar un modelo equipo por ID

        // Rutas para Modelos Equipos
        this.router.get("/modelos/", this.controller.getAll); // Obtener todos los modelos equipos
        this.router.get("/modelos/:id", this.controller.getById); // Obtener un modelos equipo por ID
        this.router.post("/modelos/", this.controller.createModelo); // Crear un nuevo modelos equipo
        this.router.put("/modelos/:id", this.controller.updateById); // Actualizar un modelo equipo por ID
        this.router.delete("/modelos/:id", this.controller.deleteById); // Eliminar un modelo equipo por ID


        return this.router;
    }
}

export default new EquiposRouter();