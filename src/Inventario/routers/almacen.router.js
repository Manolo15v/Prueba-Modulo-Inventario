import { Router } from "express";

export default class AlmacenRouter {
    constructor() {
        this.router = Router()

        this.controller
    }

    start() {

        this.router.get("/");
        this.router.post("/");
        this.router.put("/");
        this.router.delete("/");

        return this.router
    }
}