package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "BOOK")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Book  extends BaseEntity{

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private Date publicationDate;

    @ManyToMany
    @JoinTable(name = "book_author")
    private Set<Author> authors = new HashSet<>();

}
