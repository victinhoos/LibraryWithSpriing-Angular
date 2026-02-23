package com.bibliotecaa.adriano.models;

import jakarta.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "tb_livro")
public class LivroModel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id_livro;

    private String nome_livro;
    private String desc_livro;
    private String edicao_livro;
    private String ISBN13;
    private String ISBN10;
    private byte quantidade;
    private Date data_livro;

    @ManyToOne
    @JoinColumn(name = "fk_editora", nullable = false)
    private EditoraModel editora;

    @ManyToMany
    @JoinTable(
            name = "tb_livro_autor",
            joinColumns = @JoinColumn(name = "fk_livro"),
            inverseJoinColumns = @JoinColumn(name = "fk_autor")
    )
    private Set<AutorModel> autores = new HashSet<>();

}