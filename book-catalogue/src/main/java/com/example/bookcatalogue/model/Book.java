package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Date;


@Entity
@Table(name = "BOOK")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Book  extends BaseEntity{

    @Column(nullable = false, unique = false)
    private String title;

    @Column(nullable = false, unique = false)
    private String genre;

    @Column(nullable = false, unique = false)
    private Date publicationDate;
}
