-- CRUD PARA LA TABLA Modelos_Productos
-- Crear (Insertar)
INSERT INTO Modelos_Productos (Nombre, Descripcion, Codigo, Tipo_Producto, Tipo_Unidad, Unidades_Maximas, Unidades_Minimas)
VALUES ('Paracetamol', 'Medicamento para el dolor', 'PARA001', 'Medicina', 'Caja', 500, 50);

-- Leer (Consultar)
SELECT * FROM Modelos_Productos;
SELECT * FROM Modelos_Productos WHERE Nombre = 'Paracetamol';

-- Actualizar
UPDATE Modelos_Productos
SET Unidades_Maximas = 600, Unidades_Minimas = 60
WHERE Id_Producto = 1;

-- Eliminar
DELETE FROM Modelos_Productos WHERE Id_Producto = 1;


-- CRUD PARA LA TABLA Almacen_Ubicacion
-- Crear (Insertar)
INSERT INTO Almacen_Ubicacion (Area, Ubicacion)
VALUES ('Farmacia', 'Estante A1');

-- Leer (Consultar)
SELECT * FROM Almacen_Ubicacion;
SELECT * FROM Almacen_Ubicacion WHERE Area = 'Farmacia';

-- Actualizar
UPDATE Almacen_Ubicacion
SET Ubicacion = 'Estante A2'
WHERE Id_Ubicacion = 1;

-- Eliminar
DELETE FROM Almacen_Ubicacion WHERE Id_Ubicacion = 1;


-- CRUD PARA LA TABLA Modelos_Equipos
-- Crear (Insertar)
INSERT INTO Modelos_Equipos (Modelo, Nombre, Descripcion, Codigo, Marca, Unidades)
VALUES ('ECG-2000', 'Electrocardiógrafo', 'Equipo para medir actividad eléctrica del corazón', 'ECG001', 'CardioTech', 10);

-- Leer (Consultar)
SELECT * FROM Modelos_Equipos;
SELECT * FROM Modelos_Equipos WHERE Modelo = 'ECG-2000';

-- Actualizar
UPDATE Modelos_Equipos
SET Unidades = 15
WHERE Id_Modelo = 1;

-- Eliminar
DELETE FROM Modelos_Equipos WHERE Id_Modelo = 1;


-- CRUD PARA LA TABLA Instrumentos
-- Crear (Insertar)
INSERT INTO Instrumentos (Nombre, Descripcion, Tipo_Instrumento, Unidades, Unidades_Minimas, Unidades_Maximas)
VALUES ('Pinzas quirúrgicas', 'Herramienta para cirugía', 'Quirúrgico', 200, 10, 300);

-- Leer (Consultar)
SELECT * FROM Instrumentos;
SELECT * FROM Instrumentos WHERE Nombre = 'Pinzas quirúrgicas';

-- Actualizar
UPDATE Instrumentos
SET Unidades = 250
WHERE Id_Instrumento = 1;

-- Eliminar
DELETE FROM Instrumentos WHERE Id_Instrumento = 1;


-- CRUD PARA LA TABLA Productos
-- Crear (Insertar)
INSERT INTO Productos (Id_modelo_productos, Unidades, Fecha_Vencimiento)
VALUES (1, 50, '2024-12-31');

-- Leer (Consultar)
SELECT * FROM Productos;
SELECT * FROM Productos WHERE Id_modelo_productos = 1;

-- Actualizar
UPDATE Productos
SET Unidades = 100
WHERE Id_Producto = 1;

-- Eliminar
DELETE FROM Productos WHERE Id_Producto = 1;


-- CRUD PARA LA TABLA Productos_Ubicacion
-- Crear (Insertar)
INSERT INTO Productos_Ubicacion (Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion)
VALUES (30, 1, 1);

-- Leer (Consultar)
SELECT * FROM Productos_Ubicacion;
SELECT * FROM Productos_Ubicacion WHERE Id_Producto = 1;

-- Actualizar
UPDATE Productos_Ubicacion
SET Unidades_Por_Ubicacion = 50
WHERE Id_Compuesto = 1;

-- Eliminar
DELETE FROM Productos_Ubicacion WHERE Id_Compuesto = 1;


-- CRUD PARA LA TABLA Instrumentos_Ubicacion
-- Crear (Insertar)
INSERT INTO Instrumentos_Ubicacion (Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion)
VALUES (20, 1, 1);

-- Leer (Consultar)
SELECT * FROM Instrumentos_Ubicacion;
SELECT * FROM Instrumentos_Ubicacion WHERE Id_Instrumento = 1;

-- Actualizar
UPDATE Instrumentos_Ubicacion
SET Unidades_Por_Ubicacion = 25
WHERE Id_Compuesto = 1;

-- Eliminar
DELETE FROM Instrumentos_Ubicacion WHERE Id_Compuesto = 1;


-- CRUD PARA LA TABLA Equipos
-- Crear (Insertar)
INSERT INTO Equipos (Fecha_Instalacion, Estado, Frecuencia_mantenimiento, Numero_de_serie, Id_Modelo, Id_Ubicacion)
VALUES ('2023-01-15', 'Activo', 'Mensual', 'SN12345', 1, 1);

-- Leer (Consultar)
SELECT * FROM Equipos;
SELECT * FROM Equipos WHERE Numero_de_serie = 'SN12345';

-- Actualizar
UPDATE Equipos
SET Estado = 'En mantenimiento'
WHERE Id_Equipo = 1;

-- Eliminar
DELETE FROM Equipos WHERE Id_Equipo = 1;


-- CRUD PARA LA TABLA Repuestos
-- Crear (Insertar)
INSERT INTO Repuestos (Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Modelo, Id_Ubicacion)
VALUES ('Filtro de aire', 'Filtro para equipo médico', 'FILTRO001', 50, 10, 100, 1, 1);

-- Leer (Consultar)
SELECT * FROM Repuestos;
SELECT * FROM Repuestos WHERE Nombre = 'Filtro de aire';

-- Actualizar
UPDATE Repuestos
SET Unidades = 60
WHERE Id_Repuesto = 1;

-- Eliminar
DELETE FROM Repuestos WHERE Id_Repuesto = 1;