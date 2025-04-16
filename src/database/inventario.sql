
CREATE TABLE Modelos_Productos (
    Id_Producto INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Codigo VARCHAR(50),
    Tipo_Producto VARCHAR(50),
    Tipo_Unidad VARCHAR(20),
    Unidades_Maximas INT,
    Unidades_Minimas INT NOT NULL,
    PRIMARY KEY (Id_Producto)
);


CREATE TABLE Almacen_Ubicacion (
    Id_Ubicacion INT AUTO_INCREMENT,
    Area VARCHAR(100),
    Ubicacion VARCHAR(100),
    PRIMARY KEY (Id_Ubicacion)
);


CREATE TABLE Modelos_Equipos (
    Id_Modelo INT AUTO_INCREMENT,
    Modelo VARCHAR(100),
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Codigo VARCHAR(50) NOT NULL,
    Marca VARCHAR(100),
    Unidades INT,
    PRIMARY KEY (Id_Modelo)
);


CREATE TABLE Instrumentos (
    Id_Instrumento INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Tipo_Instrumento VARCHAR(50),
    Unidades INT,
    Unidades_Minimas INT,
    Unidades_Maximas INT,
    PRIMARY KEY (Id_Instrumento)
);


CREATE TABLE Productos (
    Id_Producto INT AUTO_INCREMENT,
    Id_modelo_productos INT,
    Unidades INT,
    Fecha_Vencimiento DATE,
    PRIMARY KEY (Id_Producto),
    FOREIGN KEY (Id_modelo_productos) REFERENCES Modelos_Productos(Id_Producto)
);


CREATE TABLE Productos_Ubicacion (
    Id_Compuesto INT AUTO_INCREMENT,
    Unidades_Por_Ubicacion INT,
    Id_Producto INT,
    Id_Ubicacion INT,
    PRIMARY KEY (Id_Compuesto),
    FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);


CREATE TABLE Instrumentos_Ubicacion (
    Id_Compuesto INT AUTO_INCREMENT,
    Unidades_Por_Ubicacion INT,
    Id_Instrumento INT,
    Id_Ubicacion INT,
    PRIMARY KEY (Id_Compuesto),
    FOREIGN KEY (Id_Instrumento) REFERENCES Instrumentos(Id_Instrumento),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);


CREATE TABLE Equipos (
    Id_Equipo INT AUTO_INCREMENT,
    Fecha_Instalacion DATE,
    Estado VARCHAR(50),
    Frecuencia_mantenimiento VARCHAR(50),
    Numero_de_serie VARCHAR(100),
    Id_Modelo INT,
    Id_Ubicacion INT,
    PRIMARY KEY (Id_Equipo),
    FOREIGN KEY (Id_Modelo) REFERENCES Modelos_Equipos(Id_Modelo),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);


CREATE TABLE Repuestos (
    Id_Repuesto INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Numero_de_Pieza VARCHAR(100),
    Unidades INT,
    Unidades_Minimas INT,
    Unidades_Maximas INT,
    Id_Modelo INT,
    Id_Ubicacion INT,
    PRIMARY KEY (Id_Repuesto),
    FOREIGN KEY (Id_Modelo) REFERENCES Modelos_Equipos(Id_Modelo),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);