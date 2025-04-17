import { Router } from "express";
// import from "../controllers/";


export default class RepuestosRouter {
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