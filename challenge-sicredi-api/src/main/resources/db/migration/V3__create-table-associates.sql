CREATE TABLE associates (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,

    PRIMARY KEY(id)
);