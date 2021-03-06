package com.example.bookcatalogue.model;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private int version;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
    private LocalDate publicationDate;

    @ManyToMany()
    @JoinTable(name = "book_author")
    private Set<Author> authors = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
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
