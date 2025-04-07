import { Router } from 'express'
import InstrumentosController from '../controllers/vistas.controller.js'


export default class PagesRouter {
    constructor() {
        this.pagesController = new InstrumentosController()
        this.router = Router()
    }

    start() {
    
        return this.router
    }
}