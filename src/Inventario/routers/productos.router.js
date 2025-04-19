import { Router } from "express";
import ProductosController from "../controllers/productos.controller.js";

class ProductosRouter {
    constructor() {
        this.router = Router();
        this.controller = new ProductosController(); // Instancia del controlador
    }

    start() {
        // Rutas para Productos
        this.router.get("/", this.controller.getAllProductos); // Obtener todos los productos
        this.router.get("/:id", this.controller.getProductoById); // Obtener un producto por ID
        this.router.get("/modelo/:id", this.controller.getProductosByModeloId); // Obtener productos por ID del modelo
        this.router.post("/", this.controller.createProducto); // Crear un producto
        this.router.put("/:id", this.controller.updateProductoById); // Actualizar un producto por ID
        this.router.delete("/:id", this.controller.deleteProductoById); // Eliminar un producto por ID

        // Rutas para ProductosUbicacion
        this.router.get("/ubicaciones", this.controller.getAllProductosUbicacion); // Obtener todas las ubicaciones de productos
        this.router.get("/ubicaciones/:id", this.controller.getProductosUbicacionByUbicacionId); // Obtener ubicaciones por ID de ubicación
        this.router.post("/ubicaciones", this.controller.createProductoUbicacion); // Crear una ubicación de producto
        this.router.put("/ubicaciones/:id", this.controller.updateProductoUbicacionById); // Actualizar una ubicación de producto por ID
        this.router.delete("/ubicaciones/:id", this.controller.deleteProductoUbicacionById); // Eliminar una ubicación de producto por ID

        // Rutas para ModelosProductos
        this.router.get("/modelos", this.controller.getAllModelosProductos); // Obtener todos los modelos de productos
        this.router.post("/modelos", this.controller.createModeloProducto); // Crear un modelo de producto
        this.router.put("/modelos/:id", this.controller.updateModeloProductoById); // Actualizar un modelo de producto por ID
        this.router.delete("/modelos/:id", this.controller.deleteModeloProductoById); // Eliminar un modelo de producto por ID

        return this.router;
    }
}

export default new ProductosRouter();
