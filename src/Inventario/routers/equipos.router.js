import Router from "./router.js";

export default class EquiposRouter extends Router{
    constructor() {
        super();

        this.controller
    }

    static() {

        this.router.get()
        this.router.post()
        this.router.put()
        this.router.delete()

        return this.router
    }
}