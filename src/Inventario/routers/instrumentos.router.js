import express from 'express'
import InstrumentosController from '../controllers/instrumentos.controller.js'
import controller from '../controllers/controller.js'
const { getItems, getItemById, createItem, updateItem, deleteItem } = controller

export default class PagesRouter {
    constructor() {
        this.pagesController = new InstrumentosController()
        this.router = express.Router()
    }

    start() {
        // Obtener todos los elementos
        this.router.get('/inventario', async (req, res) => {
            try {
                console.log('Request received:', req.method, req.url)
                const todos = await getItems()
                if (!todos || todos.length === 0) {
                    return res.status(404).send('No items found in inventory')
                }
                res.status(200).json(todos)
            } catch (error) {
                console.error('Error fetching items:', error.message)
                res.status(500).send(`Internal Server Error: ${error.message}`)
            }
        })

        // Obtener un elemento por ID
        this.router.get('/inventario/:id', async (req, res) => {
            try {
                const { id } = req.params
                const item = await getItemById(id)
                if (!item) {
                    return res.status(404).send(`Item with ID ${id} not found`)
                }
                res.status(200).json(item)
            } catch (error) {
                console.error('Error fetching item:', error.message)
                res.status(500).send(`Internal Server Error: ${error.message}`)
            }
        })

        // Crear un nuevo elemento
        this.router.post('/inventario', async (req, res) => {
            try {
                const newItem = req.body
                const createdItem = await createItem(newItem)
                res.status(201).json(createdItem)
            } catch (error) {
                console.error('Error creating item:', error.message)
                res.status(500).send(`Internal Server Error: ${error.message}`)
            }
        })

        // Actualizar un elemento existente
        this.router.put('/inventario/:id', async (req, res) => {
            try {
                const { id } = req.params
                const updatedData = req.body
                const updatedItem = await updateItem(id, updatedData)
                if (!updatedItem) {
                    return res.status(404).send(`Item with ID ${id} not found`)
                }
                res.status(200).json(updatedItem)
            } catch (error) {
                console.error('Error updating item:', error.message)
                res.status(500).send(`Internal Server Error: ${error.message}`)
            }
        })

        // Eliminar un elemento
        this.router.delete('/inventario/:id', async (req, res) => {
            try {
                const { id } = req.params
                const deletedItem = await deleteItem(id)
                if (!deletedItem) {
                    return res.status(404).send(`Item with ID ${id} not found`)
                }
                res.status(200).send(`Item with ID ${id} deleted successfully`)
            } catch (error) {
                console.error('Error deleting item:', error.message)
                res.status(500).send(`Internal Server Error: ${error.message}`)
            }
        })

        return this.router
    }
}