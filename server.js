import express, {static as stc, json, urlencoded} from "express";
import cors from "cors";
import {Server as HttpServer} from "http";

import VistasRouter from "./src/routers/vistas.router.js";


const PORT = 8080;

const app = express();
const httpServer = new HttpServer(app);

app.set("view engine", "ejs");

app.use(stc("public"));
app.use(json());
app.use(urlencoded());

app.use(cors());



const pages = new VistasRouter();

app.use("", pages.start());

// app.use("/api/inventario");


const server = httpServer.listen(PORT, () => {
    console.log(`http://localhost:${server.address().port}`)
});