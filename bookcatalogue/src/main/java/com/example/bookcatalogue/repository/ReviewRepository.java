package com.example.bookcatalogue.repository;

import com.example.bookcatalogue.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
