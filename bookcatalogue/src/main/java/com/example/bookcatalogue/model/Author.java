package com.example.bookcatalogue.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "AUTHOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Author extends BaseEntity {

    @Column(name = "author_name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false)
    private String bio;

    @JsonIgnore
    @ManyToMany(mappedBy = "authors")
    private Set<Book> books = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Author author = (Author) o;
        return Objects.equals(name, author.name) &&
            Objects.equals(nationality, author.nationality) &&
            Objects.equals(bio, author.bio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name, nationality, bio);
    }
}
