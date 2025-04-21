import ProductosDAO from "../models/productosDAO.js";
import ProductosUbicacionDAO from "../models/productos-ubicacionDAO.js";
import ModelosProductosDAO from "../models/modelos-productosDAO.js";

export default class ProductosController {

    async getProductoCompleto(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }

            // Obtener el producto por ID
            const producto = await ProductosDAO.readById(id);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            // Obtener las ubicaciones del producto
            const ubicaciones = await ProductosUbicacionDAO.readByProductoId(id);

            // Obtener el modelo del producto
            const modelo = await ModelosProductosDAO.readById(producto.Id_modelo_productos);

            // Combinar toda la información
            const productoCompleto = {
                ...producto,
                modelo: modelo || null,
                ubicaciones: ubicaciones || []
            };

            res.status(200).json(productoCompleto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Métodos para trabajar con Productos
    async getAllProductos(req, res) {
        try {
            const data = await ProductosDAO.readAllProductos();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductoById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            const data = await ProductosDAO.readById(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductosByModeloId(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID del modelo es requerido' });
            }
            const data = await ProductosDAO.readByModeloId(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            const { Id_modelo_productos, Unidades, Fecha_Vencimiento } = req.body;
            if (!Id_modelo_productos || !Unidades || !Fecha_Vencimiento) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await ProductosDAO.create([Id_modelo_productos, Unidades, Fecha_Vencimiento]);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductoById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await ProductosDAO.updateById(id, updateData);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductoById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await ProductosDAO.deleteById(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Métodos para trabajar con ProductosUbicacion
    async getAllProductosUbicacion(req, res) {
        try {
            const data = await ProductosUbicacionDAO.readAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductosUbicacionByUbicacionId(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID de la ubicación es requerido' });
            }
            const data = await ProductosUbicacionDAO.readByUbicacionId(id);
            if (!data || data.length == 0) {
                return res.status(404).json({ error: 'No encontrado' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProductoUbicacion(req, res) {
        try {
            const { Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion } = req.body;
            if (!Unidades_Por_Ubicacion || !Id_Producto || !Id_Ubicacion) {
                return res.status(400).json({ error: 'Todos los campos son requeridos' });
            }
            const data = await ProductosUbicacionDAO.create([Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion]);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductoUbicacionById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await ProductosUbicacionDAO.updateById(id, updateData);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductoUbicacionById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await ProductosUbicacionDAO.deleteById(id);
            res.status(200).json({ message: 'Producto en ubicación eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Métodos para trabajar con ModelosProductos
    async getAllModelosProductos(req, res) {
        try {
            const data = await ModelosProductosDAO.readAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createModeloProducto(req, res) {
        try {
            const { Nombre, Descripcion } = req.body;
            if (!Nombre || !Descripcion) {
                return res.status(400).json({ error: 'Nombre y Descripción son requeridos' });
            }
            const data = await ModelosProductosDAO.create([Nombre, Descripcion]);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateModeloProductoById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            if (!id || !updateData) {
                return res.status(400).json({ error: 'ID y datos de actualización son requeridos' });
            }
            const data = await ModelosProductosDAO.updateById(id, updateData);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteModeloProductoById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: 'ID es requerido' });
            }
            await ModelosProductosDAO.deleteById(id);
            res.status(200).json({ message: 'Modelo de producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}