# Documentación de la API de Inventario

Este documento proporciona una descripción detallada de los endpoints de la API disponibles para el módulo de Inventario.

## Ruta Base: `/api/inventario`

---

### Endpoints de Almacén

**Ruta Base:** `/api/inventario/almacen`

| Método | Ruta          | Descripción                              | Cuerpo de la Solicitud (Ejemplo JSON)                               |
| :----- | :------------ | :--------------------------------------- | :------------------------------------------------------------------ |
| GET    | `/`           | Obtener todos los registros de almacén   | N/A                                                                 |
| GET    | `/:id`        | Obtener un registro de almacén por ID    | N/A                                                                 |
| GET    | `/area/:area` | Obtener registros de almacén por área    | N/A                                                                 |
| POST   | `/`           | Crear un nuevo registro de almacén       | `{ "nombre": "string", "area": "string", "descripcion": "string" }` |
| PUT    | `/:id`        | Actualizar un registro de almacén por ID | *(Campos a actualizar, similar a POST)*                             |
| DELETE | `/:id`        | Eliminar un registro de almacén por ID   | N/A                                                                 |

---

### Endpoints de Equipos

**Ruta Base:** `/api/inventario/equipos`

| Método | Ruta   | Descripción                 | Cuerpo de la Solicitud (Ejemplo JSON)                                                                                   |
| :----- | :----- | :-------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| GET    | `/`    | Obtener todos los equipos   | N/A                                                                                                                     |
| GET    | `/:id` | Obtener un equipo por ID    | N/A                                                                                                                     |
| POST   | `/`    | Crear un nuevo equipo       | `{ "nombre": "string", "marca": "string", "modelo": "string", "numero_serie": "string", "fecha_adquisicion": "date", "ubicacion_id": "integer" }` |
| PUT    | `/:id` | Actualizar un equipo por ID | *(Campos a actualizar, similar a POST)*                                                                                 |
| DELETE | `/:id` | Eliminar un equipo por ID   | N/A                                                                                                                     |

---

### Endpoints de Instrumentos

**Ruta Base:** `/api/inventario/instrumentos`

#### Instrumentos

| Método | Ruta   | Descripción                      | Cuerpo de la Solicitud (Ejemplo JSON)                                                                                  |
| :----- | :----- | :------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| GET    | `/`    | Obtener todos los instrumentos   | N/A                                                                                                                    |
| GET    | `/:id` | Obtener un instrumento por ID    | N/A                                                                                                                    |
| POST   | `/`    | Crear un instrumento             | `{ "nombre": "string", "marca": "string", "modelo": "string", "numero_serie": "string", "fecha_calibracion": "date" }` |
| PUT    | `/:id` | Actualizar un instrumento por ID | *(Campos a actualizar, similar a POST)*                                                                                |
| DELETE | `/:id` | Eliminar un instrumento por ID   | N/A                                                                                                                    |

#### Ubicación de Instrumentos

| Método | Ruta                          | Descripción                                         | Cuerpo de la Solicitud (Ejemplo JSON)                                               |
| :----- | :---------------------------- | :-------------------------------------------------- | :---------------------------------------------------------------------------------- |
| GET    | `/ubicaciones/instrumento/`   | Obtener todas las ubicaciones de instrumentos       | N/A                                                                                 |
| GET    | `/ubicaciones/instrumento/:id`| Obtener ubicaciones por ID de instrumento           | N/A                                                                                 |
| GET    | `/ubicaciones/ubicacion/:id`  | Obtener ubicaciones por ID de ubicación             | N/A                                                                                 |
| POST   | `/ubicaciones`                | Crear una ubicación de instrumento                  | `{ "instrumento_id": "integer", "ubicacion_id": "integer", "cantidad": "integer" }` |
| PUT    | `/ubicaciones/:id`            | Actualizar una ubicación de instrumento por ID      | *(Campos a actualizar, similar a POST)*                                             |
| DELETE | `/ubicaciones/:id`            | Eliminar una ubicación de instrumento por ID        | N/A                                                                                 |

---

### Endpoints de Productos

**Ruta Base:** `/api/inventario/productos`

#### Productos

| Método | Ruta           | Descripción                        | Cuerpo de la Solicitud (Ejemplo JSON)                                                               |
| :----- | :------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------- |
| GET    | `/`            | Obtener todos los productos        | N/A                                                                                                 |
| GET    | `/producto/:id`| Obtener un producto por ID         | N/A                                                                                                 |
| GET    | `/modelo/:id`  | Obtener productos por ID de modelo | N/A                                                                                                 |
| POST   | `/`            | Crear un producto                  | `{ "modelo_id": "integer", "numero_serie": "string", "fecha_ingreso": "date", "estado": "string" }` |
| PUT    | `/:id`         | Actualizar un producto por ID      | *(Campos a actualizar, similar a POST)*                                                             |
| DELETE | `/:id`         | Eliminar un producto por ID        | N/A                                                                                                 |

#### Ubicación de Productos

| Método | Ruta              | Descripción                                 | Cuerpo de la Solicitud (Ejemplo JSON)                                            |
| :----- | :---------------- | :------------------------------------------ | :------------------------------------------------------------------------------- |
| GET    | `/ubicaciones`    | Obtener todas las ubicaciones de productos  | N/A                                                                              |
| GET    | `/ubicaciones/:id`| Obtener ubicaciones por ID de ubicación     | N/A                                                                              |
| POST   | `/ubicaciones`    | Crear una ubicación de producto             | `{ "producto_id": "integer", "ubicacion_id": "integer", "cantidad": "integer" }` |
| PUT    | `/ubicaciones/:id`| Actualizar una ubicación de producto por ID | *(Campos a actualizar, similar a POST)*                                          |
| DELETE | `/ubicaciones/:id`| Eliminar una ubicación de producto por ID   | N/A                                                                              |

#### Modelos de Productos

| Método | Ruta         | Descripción                     | Cuerpo de la Solicitud (Ejemplo JSON)                                    |
| :----- | :----------- | :------------------------------ | :----------------------------------------------------------------------- |
| GET    | `/modelos`   | Obtener todos los modelos de productos   | N/A                                                             |
| POST   | `/modelos`   | Crear un modelo de producto          | `{ "nombre": "string", "marca": "string", "descripcion": "string" }`|
| PUT    | `/modelos/:id`| Actualizar un modelo de producto por ID  | *(Campos a actualizar, similar a POST)*                        |
| DELETE | `/modelos/:id`| Eliminar un modelo de producto por ID    | N/A                                                            |

---

### Endpoints de Repuestos

**Ruta Base:** `/api/inventario/repuestos`

| Método | Ruta   | Descripción                   | Cuerpo de la Solicitud (Ejemplo JSON)                                                                |
| :----- | :----- | :---------------------------- | :--------------------------------------------------------------------------------------------------- |
| GET    | `/`    | Obtener todos los repuestos   | N/A                                                                                                  |
| GET    | `/:id` | Obtener un repuesto por ID    | N/A                                                                                                  |
| POST   | `/`    | Crear un repuesto             | `{ "nombre": "string", "numero_parte": "string", "cantidad": "integer", "ubicacion_id": "integer" }` |
| PUT    | `/:id` | Actualizar un repuesto por ID | *(Campos a actualizar, similar a POST)*                                                              |
| DELETE | `/:id` | Eliminar un repuesto por ID   | N/A                                                                                                  |

---