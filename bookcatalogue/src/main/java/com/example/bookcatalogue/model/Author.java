package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "AUTHOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Author extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false)
    private String bio;

    @ManyToMany(mappedBy = "authors")
    private Set<Book> books = new HashSet<>();

}
