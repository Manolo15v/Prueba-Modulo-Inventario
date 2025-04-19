INSERT INTO Modelos_Productos (Nombre, Descripcion, Codigo, Tipo_Producto, Tipo_Unidad, Unidades_Maximas, Unidades_Minimas) 
VALUES ('Paracetamol', 'Analgésico y antipirético utilizado para aliviar dolores leves y reducir la fiebre.', 'MED001', 'Medicamento', 'Tabletas', 1000, 100),
('Amoxicilina', 'Antibiótico de amplio espectro para infecciones bacterianas.', 'MED002', 'Medicamento', 'Cápsulas', 800, 80),
('Salbutamol', 'Broncodilatador usado para aliviar los síntomas del asma.', 'MED003', 'Medicamento', 'Aerosol', 300, 30),
('Metformina', 'Medicamento para el control de la diabetes tipo 2.', 'MED004', 'Medicamento', 'Tabletas', 600, 60),
('Diclofenaco', 'Antiinflamatorio no esteroideo para tratar dolor e inflamación.', 'MED005', 'Medicamento', 'Tabletas', 700, 70),
('Loratadina', 'Antihistamínico usado para aliviar síntomas de alergias.', 'MED006', 'Medicamento', 'Tabletas', 500, 50),
('Omeprazol', 'Inhibidor de la bomba de protones utilizado para tratar el reflujo gástrico.', 'MED007', 'Medicamento', 'Cápsulas', 750, 75),
('Insulina', 'Hormona utilizada para el tratamiento de la diabetes mellitus.', 'MED008', 'Medicamento', 'Frascos', 400, 40),
('Ceftriaxona', 'Antibiótico de tercera generación para infecciones graves.', 'MED009', 'Medicamento', 'Ampollas', 350, 35),
('Ibuprofeno', 'Antiinflamatorio y analgésico usado para dolores leves a moderados.', 'MED010', 'Medicamento', 'Tabletas', 900, 90);

INSERT INTO Almacen_Ubicacion (Area, Ubicacion)
VALUES ('Laboratorio', 'Estante 3-B'),
('Farmacia Principal', 'Pasillo 1-A'),
('Emergencia', 'Depósito E-2'),
('Pediatría', 'Gabinete P-4'),
('Quirófano', 'Sala Q-1');

INSERT INTO Modelos_Equipos (Modelo, Nombre, Descripcion, Codigo, Marca, Unidades)
VALUES ('CEN-3000', 'Centrífuga Industrial', 'Centrífuga de alta velocidad para laboratorio', 'CEN3000', 'LabTech', 5),
('ECG-210', 'Electrocardiógrafo', 'Equipo para monitoreo de la actividad eléctrica del corazón', 'ECG210', 'CardioMed', 3),
('VEN-800', 'Ventilador Mecánico', 'Soporte respiratorio para pacientes en cuidados intensivos', 'VEN800', 'RespiraTech', 10),
('INF-500', 'Bomba de Infusión', 'Dispositivo para administrar medicamentos vía intravenosa', 'INF500', 'MediFlow', 15),
('DES-900', 'Desfibrilador Automático', 'Equipo para restablecer el ritmo cardíaco en emergencias', 'DES900', 'LifeLine', 4);

INSERT INTO Instrumentos (Nombre, Descripcion, Tipo_Instrumento, Unidades, Unidades_Minimas, Unidades_Maximas)
VALUES ('Pipeta Digital', 'Pipeta de alta precisión para medición exacta', 'Medición', 20, 5, 50),
('Bisturí', 'Instrumento de corte utilizado en procedimientos quirúrgicos', 'Corte', 100, 20, 200),
('Termómetro Digital', 'Dispositivo para medir la temperatura corporal', 'Medición', 30, 10, 60),
('Pinzas Quirúrgicas', 'Instrumento para sujetar tejidos durante cirugía', 'Sujeción', 50, 10, 100),
('Tijeras de Tejido', 'Tijeras especiales para cortar tejidos en cirugía', 'Corte', 40, 10, 80),
('Estetoscopio', 'Instrumento para auscultar sonidos internos del cuerpo', 'Diagnóstico', 25, 5, 50),
('Martillo de Reflejos', 'Herramienta para pruebas neurológicas', 'Diagnóstico', 15, 5, 30),
('Espéculo Vaginal', 'Instrumento para exámenes ginecológicos', 'Examinación', 60, 10, 120),
('Jeringa Estéril', 'Dispositivo para inyectar o extraer líquidos', 'Inyección', 200, 50, 500),
('Bandeja Quirúrgica', 'Superficie estéril para colocar instrumentos durante cirugías', 'Apoyo', 10, 2, 20);


INSERT INTO Productos (Id_modelo_productos, Unidades, Fecha_Vencimiento)
VALUES (1, 300, '2026-12-31'),
(1, 150, '2026-12-31'),
(1, 200, '2026-12-31'),
(5, 100, '2026-12-31'),
(5, 100, '2026-12-31'),
(7, 100, '2026-12-31'),
(7, 100, '2026-12-31'),
(9, 100, '2026-12-31');

INSERT INTO Productos_Ubicacion (Unidades_Por_Ubicacion, Id_Producto, Id_Ubicacion)
VALUES (51, 1, 1),
(52, 1, 2),
(53, 1, 3),
(10, 2, 1),
(20, 2, 2),
(30, 2, 3),
(51, 4, 1),
(52, 4, 2),
(53, 4, 3);

INSERT INTO Instrumentos_Ubicacion (Unidades_Por_Ubicacion, Id_Instrumento, Id_Ubicacion)
VALUES (51, 1, 1),
(52, 1, 2),
(53, 1, 3),
(10, 2, 1),
(20, 2, 2),
(30, 2, 3),
(51, 4, 1),
(52, 4, 2),
(53, 4, 3);

INSERT INTO Equipos (Fecha_Instalacion, Estado, Frecuencia_mantenimiento, Numero_de_serie, Id_Modelo, Id_Ubicacion)
VALUES ('2025-03-15', 'Operativo', 'Trimestral', 'SN-CEN3000-12345', 1, 1);

INSERT INTO Repuestos (Nombre, Descripcion, Numero_de_Pieza, Unidades, Unidades_Minimas, Unidades_Maximas, Id_Ubicacion)
VALUES ('Motor centrífuga', 'Motor de repuesto para centrífuga', 'MCF-123', 5, 2, 10, 1);