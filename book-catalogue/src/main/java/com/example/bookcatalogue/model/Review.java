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
    @JoinColumn(name = "id", table = "USER")
    private Long user;

    @OneToOne
    @JoinColumn(name = "id", table = "BOOK")
    private Long book;

    @Column(nullable = false, unique = false)
    private String review;

    @Column(nullable = false, unique = false)
    private int rate;

    @Column(nullable = false, unique = false)
    private Date date;


}

