package com.bibliotecaa.adriano.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "tb_autor")
public class AutorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id_autor;
    private String nome_autor;

    public UUID getId_autor() {
        return id_autor;
    }

    public void setId_autor(UUID id_autor) {
        this.id_autor = id_autor;
    }

    public String getNome_autor() {
        return nome_autor;
    }

    public void setNome_autor(String nome_autor) {
        this.nome_autor = nome_autor;
    }


}
