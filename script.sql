CREATE DATABASE IF NOT EXISTS camisase7e;

USE camisase7e;

CREATE TABLE IF NOT EXISTS camisas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    time VARCHAR(100) NOT NULL,
    tamanho VARCHAR(10) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL
);

INSERT INTO camisas (nome, time, tamanho, preco, estoque)
VALUES
('Camisa Home 2025', 'Real Madrid', 'M', 199.90, 10),
('Camisa Home 2025', 'Barcelona', 'G', 189.90, 8),
('Camisa Away 2025', 'Manchester City', 'P', 179.90, 5);
