package com.example.bookcatalogue.service;

import com.example.bookcatalogue.model.Book;
import com.example.bookcatalogue.model.Review;
import com.example.bookcatalogue.repository.BookRepository;
import com.example.bookcatalogue.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

   @Autowired
   private ReviewRepository reviewRepository;

   @Autowired
   private BookRepository bookRepository;

   @Autowired
   private UserService session;

   public Review addReview(Review review) {
      review.setUser(session.getUser());
      review.setDate(LocalDate.now());
      return reviewRepository.save(review);
   }

   public List<Review> getReviewsOfBook(Long bookId) {
      Book book = bookRepository.findOne(bookId);
      if (book == null) {
         return Collections.emptyList();
      } else {
         return book.getReviews().stream().sorted(Comparator.comparing(Review::getDate)).collect(Collectors.toList());
      }
   }

   public void deleteReview(Long id) {
      reviewRepository.delete(id);
   }
}
