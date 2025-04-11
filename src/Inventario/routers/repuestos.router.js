import Router from "./router.js";
// import from "../controllers/";


export default class RepuestosRouter extends Router{
    constructor() {
        super();

        this.controller
    }

    static() {

        this.router.get();
        this.router.post();
        this.router.put();
        this.router.delete();

        return this.router
    }
}