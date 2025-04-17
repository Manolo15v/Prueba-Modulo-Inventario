import { Router } from "express";

/*
    Clase padre de todos los routers esta hecha para ser una clase abstracta y un ejemplo de como funciona
    Todas las clases router necesitan un controlador cual se va a encargar de manejar la peticion http
*/
export default class AbstractRouter {
    
    constructor(){
        this.router = Router()

        this.controller
    }


    //Funcion para inicializar el router respectivo (Comentar el path que sigue antes del router el cual esta en el server.js)
    start() {

        /*
            Aqui se van a definir los endpoints respectivos y su metodo dependiendo del controllador
            Ejemplo:

            this.router.get("objetos/", this.controller.getAll)
            this.router.get("objetos/:id", this.controller.getById)
            this.router.post("")
            this.router.put("objetos/:id", middleware, .this.controller.changeById)
            this.router.delete("")

            Por favor comentar que hace cada uno de los endpoints
        
        */
        // Example endpoints for the abstract router
        this.router.get("/items", this.controller.getAll); // Retrieves all items
        this.router.get("/items/:id", this.controller.getById); // Retrieves an item by its ID
        this.router.post("/items", this.controller.create); // Creates a new item
        this.router.put("/items/:id", this.controller.updateById); // Updates an item by its ID
        this.router.delete("/items/:id", this.controller.deleteById); // Deletes an item by its ID

        return this.router
    }
}