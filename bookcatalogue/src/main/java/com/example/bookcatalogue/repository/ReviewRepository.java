package com.example.bookcatalogue.repository;

import com.example.bookcatalogue.model.Book;
import com.example.bookcatalogue.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByBook(Book book);
}
