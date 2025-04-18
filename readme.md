# Documentación del Modulo Inventario

## Flujo de Datos: Base de Datos, DAO, Controller, Router, API

### 1. Base de Datos
La base de datos es el nivel más bajo del flujo de datos y se encarga de almacenar la información persistente del sistema. Los datos se organizan en tablas relacionales o documentos (dependiendo del tipo de base de datos utilizada, SQL o NoSQL). Este nivel proporciona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) básicas para interactuar con los datos.

### 2. DAO (Data Access Object)
El DAO actúa como una capa intermedia entre la base de datos y el resto de la aplicación. Su responsabilidad principal es encapsular la lógica de acceso a datos y realizar consultas específicas a la base de datos. Esto incluye:
- Ejecutar consultas SQL o equivalentes.
- Mapear los resultados de las consultas a objetos del modelo.
- Manejar errores relacionados con la base de datos.

### 3. Controller
El controlador es responsable de manejar la lógica de negocio de la aplicación. Recibe las solicitudes del router, interactúa con el DAO para obtener o modificar datos, y devuelve una respuesta adecuada. Sus responsabilidades incluyen:
- Validar los datos de entrada.
- Coordinar las operaciones entre el DAO y otros servicios.
- Formatear y estructurar las respuestas para el cliente.

### 4. Router
El router define las rutas de la API y mapea cada ruta a un controlador específico. Es el punto de entrada para las solicitudes HTTP y se encarga de:
- Determinar qué controlador manejará una solicitud en función de la URL y el método HTTP.
- Aplicar middleware para tareas como autenticación, autorización y validación de datos.

### 5. API
La API es la interfaz pública de la aplicación que permite a los clientes (como aplicaciones frontend o servicios externos) interactuar con el sistema. Utiliza el protocolo HTTP para enviar y recibir datos en formato JSON u otros formatos estándar. Las responsabilidades de la API incluyen:
- Exponer endpoints claros y bien documentados.
- Garantizar la seguridad mediante autenticación y autorización.
- Proporcionar respuestas consistentes y significativas.

### Flujo General
1. Un cliente realiza una solicitud HTTP a un endpoint de la API.
2. El router identifica la ruta y delega la solicitud al controlador correspondiente.
3. El controlador valida los datos de entrada y solicita al DAO que interactúe con la base de datos.
4. El DAO ejecuta las operaciones necesarias en la base de datos y devuelve los resultados al controlador.
5. El controlador procesa los datos, aplica la lógica de negocio y envía una respuesta al cliente a través de la API.

Este flujo asegura una separación clara de responsabilidades, facilitando el mantenimiento, la escalabilidad y la reutilización del código.