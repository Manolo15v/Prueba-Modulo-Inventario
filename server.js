import express, {static as stc, json, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Server as HttpServer} from "http";

import VistasRouter from "./src/Vistas/routers/vistas.router.js";
import PagesRouter from "./src/Inventario/routers/instrumentos.router.js";

dotenv.config()

const app = express();
const httpServer = new HttpServer(app);

// app.set("view engine", "ejs");

app.use(stc("public"));
app.use(json());
app.use(urlencoded());

app.use(cors());

const pages = new VistasRouter();
const inventario = new PagesRouter();

app.use("", pages.start());
app.use("", inventario.start());


const server = httpServer.listen(process.env.PORT, () => {
    console.log(`http://localhost:${server.address().port}`)
});