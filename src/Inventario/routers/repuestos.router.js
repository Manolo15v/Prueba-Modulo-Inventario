import { Router } from "express";
import Controller from "../controllers/";

class RepuestosRouter {
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

export default new RepuestosRouter();