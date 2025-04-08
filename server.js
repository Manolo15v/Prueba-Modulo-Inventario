import express, {static as stc, json, urlencoded} from "express";
import cors from "cors";
import {Server as HttpServer} from "http";

import VistasRouter from "./src/Vistas/routers/vistas.router.js";
import PagesRouter from "./src/Inventario/routers/instrumentos.router.js";


const PORT = 8080;

const app = express();
const httpServer = new HttpServer(app);

app.set("view engine", "ejs");

app.use(stc("public"));
app.use(json());
app.use(urlencoded());

app.use(cors());

const pages = new VistasRouter();
const inventario = new PagesRouter();

app.use("", pages.start());
app.use("", inventario.start());


const server = httpServer.listen(PORT, () => {
    console.log(`http://localhost:${server.address().port}`)
});