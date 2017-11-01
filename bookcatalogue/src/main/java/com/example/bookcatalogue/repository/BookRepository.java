package com.example.bookcatalogue.repository;

import com.example.bookcatalogue.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Set<Book> findByTitleContainingIgnoreCase(String title);
    Set<Book> findByGenreContainingIgnoreCase(String genre);
    Set<Book> findByTitleContainingIgnoreCaseOrGenreContainingIgnoreCase(String title, String genre);
}
