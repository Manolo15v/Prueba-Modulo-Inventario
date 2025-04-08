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
        // renderiza la vista de la tabla
        this.router.get('/prueba', this.pagesController.instrumentosTabla)


        return this.router
    }
}