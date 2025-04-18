import { Router } from "express";
import ProductosController from "../controllers/productos.controller.js"; // Asegúrate de tener este archivo y clase

export default class ProductosRouter {
    constructor() {
        this.router = Router();
        this.controller = new ProductosController(); // Asignamos el controlador instanciado
    }

    start() {
        this.router.get("/", this.controller.getProductos); // Ruta para obtener productos
        this.router.post("/", this.controller.createProducto); // Ruta para crear un producto
        this.router.put("/:id", this.controller.updateProducto); // Ruta para actualizar un producto
        this.router.delete("/:id", this.controller.deleteProducto); // Ruta para eliminar un producto

        return this.router;
    }
}
