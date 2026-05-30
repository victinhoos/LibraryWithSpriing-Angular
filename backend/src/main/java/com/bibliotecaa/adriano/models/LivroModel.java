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

    public UUID getId_livro() {
        return id_livro;
    }

    public void setId_livro(UUID id_livro) {
        this.id_livro = id_livro;
    }

    public String getNome_livro() {
        return nome_livro;
    }

    public void setNome_livro(String nome_livro) {
        this.nome_livro = nome_livro;
    }

    public String getDesc_livro() {
        return desc_livro;
    }

    public void setDesc_livro(String desc_livro) {
        this.desc_livro = desc_livro;
    }

    public String getEdicao_livro() {
        return edicao_livro;
    }

    public void setEdicao_livro(String edicao_livro) {
        this.edicao_livro = edicao_livro;
    }

    public String getISBN13() {
        return ISBN13;
    }

    public void setISBN13(String ISBN13) {
        this.ISBN13 = ISBN13;
    }

    public String getISBN10() {
        return ISBN10;
    }

    public void setISBN10(String ISBN10) {
        this.ISBN10 = ISBN10;
    }

    public byte getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(byte quantidade) {
        this.quantidade = quantidade;
    }

    public Date getData_livro() {
        return data_livro;
    }

    public void setData_livro(Date data_livro) {
        this.data_livro = data_livro;
    }

    public EditoraModel getEditora() {
        return editora;
    }

    public void setEditora(EditoraModel editora) {
        this.editora = editora;
    }

    public Set<AutorModel> getAutores() {
        return autores;
    }

    public void setAutores(Set<AutorModel> autores) {
        this.autores = autores;
    }
}