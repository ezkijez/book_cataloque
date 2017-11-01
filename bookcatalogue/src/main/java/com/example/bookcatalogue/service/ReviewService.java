package com.example.bookcatalogue.service;

import com.example.bookcatalogue.model.Review;
import com.example.bookcatalogue.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ReviewService {

   @Autowired
   private ReviewRepository reviewRepository;

   @Autowired Session session;

   public Review addReview(Review review) {
      review.setUser(session.getUser());
      review.setDate(LocalDate.now());
      return reviewRepository.save(review);
   }

   public void deleteReview(Long id) {
      reviewRepository.delete(id);
   }
}
