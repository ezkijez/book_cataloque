package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "AUTHOR")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Review  extends BaseEntity{

    @OneToOne
    @JoinColumn(name = "user")
    private User user;

    @OneToOne
    @JoinColumn(name = "book")
    private Book book;

    @Column(nullable = false)
    private String review;

    @Column(nullable = false)
    private int rate;

    @Column(nullable = false)
    private Date date;

}

