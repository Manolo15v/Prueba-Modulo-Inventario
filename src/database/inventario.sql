CREATE TABLE Modelos_Productos (
    Id_Producto INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Codigo VARCHAR(50),
    Tipo_Producto VARCHAR(50),
    Tipo_Unidad VARCHAR(20),
    Unidades_Maximas INT,
    Unidades_Minimas INT DEFAULT 0,
    PRIMARY KEY (Id_Producto)
);

CREATE TABLE Almacen_Ubicacion (
    Id_Ubicacion INT AUTO_INCREMENT,
    Area VARCHAR(100) NOT NULL,
    Ubicacion VARCHAR(100),
    PRIMARY KEY (Id_Ubicacion)
);

CREATE TABLE Modelos_Equipos (
    Id_Modelo INT AUTO_INCREMENT,
    Modelo VARCHAR(100),
    Nombre VARCHAR(100) NOT NULL,
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
    Unidades INT DEFAULT 0,
    Unidades_Minimas INT DEFAULT 0,
    Unidades_Maximas INT,
    PRIMARY KEY (Id_Instrumento)
);

CREATE TABLE Productos (
    Id_Producto INT AUTO_INCREMENT,
    Id_modelo_productos INT NOT NULL,
    Unidades INT,
    Fecha_Vencimiento DATE NOT NULL,
    PRIMARY KEY (Id_Producto),
    FOREIGN KEY (Id_modelo_productos) REFERENCES Modelos_Productos(Id_Producto)
);

CREATE TABLE Productos_Ubicacion (
    Unidades_Por_Ubicacion INT DEFAULT 0,
    Id_Producto INT NOT NULL,
    Id_Ubicacion INT NOT NULL,
    PRIMARY KEY (Id_Producto, Id_Ubicacion),
    FOREIGN KEY (Id_Producto) REFERENCES Productos(Id_Producto),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);

CREATE TABLE Instrumentos_Ubicacion (
    Unidades_Por_Ubicacion INT DEFAULT 0,
    Id_Instrumento INT NOT NULL,
    Id_Ubicacion INT NOT NULL,
    PRIMARY KEY (Id_Instrumento, Id_Ubicacion),
    FOREIGN KEY (Id_Instrumento) REFERENCES Instrumentos(Id_Instrumento),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);

CREATE TABLE Equipos (
    Id_Equipo INT AUTO_INCREMENT,
    Fecha_Instalacion DATE,
    Estado VARCHAR(50),
    Frecuencia_mantenimiento VARCHAR(50),
    Numero_de_serie VARCHAR(100),
    Id_Modelo INT NOT NULL,
    Id_Ubicacion INT NOT NULL,
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
    Unidades_Minimas INT DEFAULT 0,
    Unidades_Maximas INT,
    Id_Ubicacion INT NOT NULL,
    PRIMARY KEY (Id_Repuesto),
    FOREIGN KEY (Id_Ubicacion) REFERENCES Almacen_Ubicacion(Id_Ubicacion)
);