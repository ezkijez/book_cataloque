package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.model.Review;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/{bookId}")
    public List<Review> getReviewsOfBook(@PathVariable Long bookId) {
        return reviewService.getReviewsOfBook(bookId);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addReview")
    public Review addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteReview/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
    }

}
