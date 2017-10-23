package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "AUTHOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @ManyToOne
    @JoinColumn(name = "id", table = "USER")
    private Long user;

    @ManyToOne
    @JoinColumn(name = "id", table = "BOOK")
    private Long book;

    @Column(nullable = false, unique = false)
    private String review;

    @Column(nullable = false, unique = false)
    private int rate;

    @Column(nullable = false, unique = false)
    private Date date;

    public Review() {
    }
}

