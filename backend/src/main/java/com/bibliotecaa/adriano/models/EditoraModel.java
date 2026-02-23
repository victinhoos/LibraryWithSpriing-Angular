package com.bibliotecaa.adriano.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "tb_editora")
public class EditoraModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id_editora;
    private String nome_editora;

    public UUID getId_editora() {
        return id_editora;
    }

    public void setId_editora(UUID id_editora) {
        this.id_editora = id_editora;
    }

    public String getNome_editora() {
        return nome_editora;
    }

    public void setNome_editora(String nome_editora) {
        this.nome_editora = nome_editora;
    }
}
