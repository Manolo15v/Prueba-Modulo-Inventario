import { Router } from 'express'
import VistasController from '../controllers/vistas.controller.js'

/* 
    Objeto que maneja las que vistas obtiene el usuario dependiendo del endpoint
    Todos los endpoints tiene que ser GET y ir asociados a un metodo del controlador
*/

export default class VistasRouter {
    constructor() {
        this.vistasController = new VistasController()
        this.router = Router()
    }

    start() {
        this.router.get('/prueba', this.vistasController.index)
        this.router.get('/dashbord', this.vistasController.dashbord)

        return this.router
    }
}