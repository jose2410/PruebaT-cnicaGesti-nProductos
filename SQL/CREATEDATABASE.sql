CREATE DATABASE PruebaProductosDB;
GO

USE PruebaProductosDB;
GO

CREATE TABLE Productos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Precio DECIMAL(18,2) NOT NULL,
    FechaCreacion DATETIME NOT NULL
);
GO

INSERT INTO Productos (Nombre, Precio, FechaCreacion)
VALUES ('Laptop', 3500.50, GETDATE());

INSERT INTO Productos (Nombre, Precio, FechaCreacion)
VALUES ('Mouse', 80.00, GETDATE());