CREATE TABLE EDITORA (
    id_editora INT PRIMARY KEY,
    nome_editora VARCHAR(150)
);

CREATE TABLE AUTOR (
    id_autor INT PRIMARY KEY,
    nome_autor VARCHAR(150) 
);

CREATE TABLE USUARIO (
    pk_idUsuario INT PRIMARY KEY,
    
    nome_completo VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL, 
    rg VARCHAR(20),
    data_nascimento DATE,
    nacionalidade VARCHAR(50),
    
    email VARCHAR(150) UNIQUE NOT NULL,
    celular VARCHAR(20),
    telefone_emergencia VARCHAR(20),
    
    cep VARCHAR(9),
    endereco VARCHAR(255),
    complemento VARCHAR(150),
    
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE BIBLIOTECARIO (
    pk_idBibliotecario INT PRIMARY KEY,
    nome_completo VARCHAR(150),
    email VARCHAR(150) UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE HISTORICO_SENHA (
    id_historico_senha INT PRIMARY KEY,
    fk_idBibliotecario INT,
    senha_antiga VARCHAR(255),
    data_alteracao DATE,
    FOREIGN KEY (fk_idBibliotecario) REFERENCES BIBLIOTECARIO(pk_idBibliotecario)
);

CREATE TABLE LIVRO (
    id_livro INT PRIMARY KEY,
    fk_editora INT,
    fk_autor INT,
    nome_livro VARCHAR(200),
    desc_livro TEXT,
    quantidade INT,
    edicao_livro VARCHAR(50),  
    data_livro DATE,
    isbn10_livro VARCHAR(10),
    isbn13_livro VARCHAR(13),
    FOREIGN KEY (fk_editora) REFERENCES EDITORA(id_editora),
    FOREIGN KEY (fk_autor) REFERENCES AUTOR(id_autor)
);

CREATE TABLE EMPRESTIMO (
    pk_idHistorico INT PRIMARY KEY,
    fk_idUsuario INT,
    fk_idBibliotecario INT,
    data_emprestimo DATE, 
    entrada BOOLEAN,     
    FOREIGN KEY (fk_idUsuario) REFERENCES USUARIO(pk_idUsuario),
    FOREIGN KEY (fk_idBibliotecario) REFERENCES BIBLIOTECARIO(pk_idBibliotecario)
);

CREATE TABLE REGISTRA (
    pk_idLivro_Historico INT PRIMARY KEY,
    fk_idLivro INT,
    fk_idHistorico INT,
    data_registro DATE,  
    entrada BOOLEAN,         
    FOREIGN KEY (fk_idLivro) REFERENCES LIVRO(id_livro),
    FOREIGN KEY (fk_idHistorico) REFERENCES EMPRESTIMO(pk_idHistorico)
);