import express, {static as stc, json, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Server as HttpServer} from "http";

/*

Importacion y instanciamiento de los routers 
Para el integrador separar cuales routers son de cada modulo

Cada Router va a contener una parte de la api (el backend) y cada router va estar dirijido a hacer un crud en la base de datos 
Por ahora el router de vistas no se va a utilizar va a hacer puro html, aunque la prioridad aurorita es hacer el backend

*/


//// import VistasRouter from "./src/Vistas/routers/vistas.router.js"; esto no es del modulo es del manejo de ejs
import AlmacenRouter from "./src/Inventario/routers/almacen.router.js";
import EquiposRouter from "./src/Inventario/routers/equipos.router.js";
import InstrumentosRouter from "./src/Inventario/routers/instrumentos.router.js";
import ProductosRouter from "./src/Inventario/routers/productos.router.js";
import RepuestosRouter from "./src/Inventario/routers/repuestos.router.js";


//Permite el uso del archivo .env 
// RECUERDA CONFIGUAR EL ARCHIVO .env ANTES DE EJECUTAR EL SERVIDOR
dotenv.config()

const app = express();
const httpServer = new HttpServer(app);

// app.set("view engine", "ejs");

/*

Configuraciones varias

Esta configurado el server para enviar la pagina index.html de la carpeta public.
Hacer la navegacion desde el front hacia las carpeta pages en un futuro

*/

app.use(stc("public")); // Para el frontend localizado en la carpeta Public, lleva directamente al index.html mientra no haya algo en el enpoint "/" IMPORTANTE
app.use(json());
app.use(urlencoded());

app.use(cors());

/*

    Declaracion de las rutas para los endpoints
    Todas las rutas que empiecen por "/api/..." van renferenciadas al backend para no mezclar con la navegacion del front
    IMPORTANTE NO USAR LA RUTA "" O "/" DIRECTAMENTE PARA QUE FUNCIONE EL DIRECCIONAMIENTO A LOS ARCHIVOS ESTATICOS EN LA CARPETA PUBLIC

*/

// app.use("", pages.start()); // No se va a usar las paginas ejs por ahora NO DESCOMENTAR

app.use("/api/inventario/almacen", AlmacenRouter.start());
app.use("/api/inventario/equipos", EquiposRouter.start());
app.use("/api/inventario/instrumentos", InstrumentosRouter.start());
app.use("/api/inventario/productos", ProductosRouter.start());
app.use("/api/inventario/repuestos", RepuestosRouter.start());

// Regresa error a cualquier enpoint no existente
app.all("/api/*", (req, res) => {
    res.status(400).json({ "error": "endpoint no encontrado" })
});

app.all("*", (req, res) => {
    res.status(400).json({ "error": "pagina no encontrada" })
});

const server = httpServer.listen(process.env.PORT, () => {
    console.log(`http://localhost:${server.address().port}`)
});