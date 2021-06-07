create database petshop;

use petshop;

create table clientes(
	id int auto_increment primary key,
    nome varchar(400) not null,
    endereco varchar(400) not null,
    cpf varchar(20)
);

create table pet(
	id int auto_increment primary key,
    nome varchar(400) not null,
    id_cliente int not null,
    foto varchar(500),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

create table atendente(
	id int auto_increment primary key,
    nome varchar(400) not null,
    endereco varchar(400) not null,
    cpf varchar(20),
    funcao varchar(200)
);

create table agendamento(
	id int auto_increment primary key,
    descricao varchar(400) not null,
	id_cliente int not null, 
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    id_pet int not null,
    FOREIGN KEY (id_pet) REFERENCES pet(id),
    horario datetime not null  
);

Insert into clientes(nome,endereco,cpf) 
values ('JAQUELINE','ULYSSES GOMES PRIOR,6771','4606.606.708.06');

SELECT * FROM clientes;
SELECT * FROM atendente;

Insert into atendente(nome,endereco,cpf,funcao) 
values ('Patricia','ULYSSES GOMES PRIOR,6771','489.489.489.86','Tosador');

SELECT * FROM atendente