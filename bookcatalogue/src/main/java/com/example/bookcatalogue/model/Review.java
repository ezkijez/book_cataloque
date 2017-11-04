package com.example.bookcatalogue.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "REVIEW")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review  extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "book")
    private Book book;

    @Column(nullable = false)
    private String review;

    @Column(nullable = false)
    private int rate;

    @Column(nullable = false)
    private LocalDate date;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Review review1 = (Review) o;
        return rate == review1.rate &&
            Objects.equals(user, review1.user) &&
            Objects.equals(book, review1.book) &&
            Objects.equals(review, review1.review) &&
            Objects.equals(date, review1.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), user, book, review, rate, date);
    }
}

