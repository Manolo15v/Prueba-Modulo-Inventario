import { Router } from "express";
import ProductosController from "../controllers/productos.controller.js";

class ProductosRouter {
    constructor() {
        this.router = Router();
        this.controller = new ProductosController(); // Instancia del controlador
    }

    start() {
        // Rutas para Productos
        this.router.get("/", (req, res) => this.controller.getAllProductos(req, res)); // Obtener todos los productos
        this.router.get("/:id", (req, res) => this.controller.getProductoById(req, res)); // Obtener un producto por ID
        this.router.get("/modelo/:id", (req, res) => this.controller.getProductosByModeloId(req, res)); // Obtener productos por ID del modelo
        this.router.post("/", (req, res) => this.controller.createProducto(req, res)); // Crear un producto
        this.router.put("/:id", (req, res) => this.controller.updateProductoById(req, res)); // Actualizar un producto por ID
        this.router.delete("/:id", (req, res) => this.controller.deleteProductoById(req, res)); // Eliminar un producto por ID

        // Rutas para ProductosUbicacion
        this.router.get("/ubicaciones", (req, res) => { console.log("hola"); this.controller.getAllProductosUbicacion(req, res); }); // Obtener todas las ubicaciones de productos
        this.router.get("/ubicaciones/:id", (req, res) => this.controller.getProductosUbicacionByUbicacionId(req, res)); // Obtener ubicaciones por ID de ubicación
        this.router.post("/ubicaciones", (req, res) => this.controller.createProductoUbicacion(req, res)); // Crear una ubicación de producto
        this.router.put("/ubicaciones/:id", (req, res) => this.controller.updateProductoUbicacionById(req, res)); // Actualizar una ubicación de producto por ID
        this.router.delete("/ubicaciones/:id", (req, res) => this.controller.deleteProductoUbicacionById(req, res)); // Eliminar una ubicación de producto por ID

        // Rutas para ModelosProductos
        this.router.get("/modelos", (req, res) => this.controller.getAllModelosProductos(req, res)); // Obtener todos los modelos de productos
        this.router.post("/modelos", (req, res) => this.controller.createModeloProducto(req, res)); // Crear un modelo de producto
        this.router.put("/modelos/:id", (req, res) => this.controller.updateModeloProductoById(req, res)); // Actualizar un modelo de producto por ID
        this.router.delete("/modelos/:id", (req, res) => this.controller.deleteModeloProductoById(req, res)); // Eliminar un modelo de producto por ID

        return this.router;
    }
}

export default new ProductosRouter();
