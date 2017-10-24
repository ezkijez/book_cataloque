package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "BOOKAUTHOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class BookAuthor  extends BaseEntity{


    @OneToOne
    @JoinColumn(name = "id", table="BOOK")
    private Book book;


    @OneToOne
    @JoinColumn(name = "id", table="AUTHOR")
    private Author author;
}
