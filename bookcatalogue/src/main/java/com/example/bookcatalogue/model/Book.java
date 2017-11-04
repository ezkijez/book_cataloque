package com.example.bookcatalogue.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


@Entity
@Table(name = "BOOK")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book  extends BaseEntity{

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private LocalDate publicationDate;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "book_author")
    private Set<Author> authors = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "book")
    private Set<Review> reviews = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Book book = (Book) o;
        return Objects.equals(title, book.title) &&
            Objects.equals(genre, book.genre) &&
            Objects.equals(publicationDate, book.publicationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), title, genre, publicationDate);
    }
}
