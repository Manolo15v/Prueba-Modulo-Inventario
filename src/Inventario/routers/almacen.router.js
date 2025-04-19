import { Router } from "express";
import AlmacenController from "../controllers/almacen.controller.js"; // Asegúrate de que la ruta sea correcta


class AlmacenRouter {
    constructor() {
        this.router = Router();
        this.controller = new AlmacenController(); // Instancia del controlador
    }

    start() {// ruta padre de los enpoints "/api/inventario/almacen"
        this.router.get("/", this.controller.getAll); // Obtener todos los registros
        this.router.get("/:id", this.controller.getById); // Obtener un registro por ID
        this.router.get("/area/:area", this.controller.getByArea); // Obtener registros por área
        this.router.post("/", this.controller.create); // Crear un nuevo registro
        this.router.put("/:id", this.controller.updateById); // Actualizar un registro por ID
        this.router.delete("/:id", this.controller.deleteById); // Eliminar un registro por ID

        return this.router;
    }
}

export default new AlmacenRouter();