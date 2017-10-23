package com.example.bookcatalogue.model;

import javax.persistence.*;

public class BookAuthor {

    @ManyToMany
    @JoinColumn(name = "columnname", table="BOOK")
    private Long Book;

    @OneToOne
    @JoinColumn(name = "columnname", table="AUTHOR")
    private Long Author;
}
