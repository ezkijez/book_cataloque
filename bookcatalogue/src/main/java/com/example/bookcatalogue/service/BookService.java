package com.example.bookcatalogue.service;

import com.example.bookcatalogue.dto.BookSearch;
import com.example.bookcatalogue.model.Author;
import com.example.bookcatalogue.model.Book;
import com.example.bookcatalogue.repository.AuthorRepository;
import com.example.bookcatalogue.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

    public Set<Book> getAllBooks() {
        return new HashSet<>(bookRepository.findAll());
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(Long id) {
        return bookRepository.findOne(id);
    }

    public Book updateBook(Book book) {
        return book.getId() == null ? book : bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.delete(id);
    }

    public Set<Book> searchBook(BookSearch criteria) {
        if (criteria.getAuthor() != null) {
            return authorRepository.findByNameContainingIgnoreCase(criteria.getAuthor())
                .stream()
                .map(Author::getBooks)
                .flatMap(Collection::stream)
                .filter(b -> filterBook(b, criteria))
                .collect(Collectors.toSet());
        } else {
            if (criteria.getTitle() != null || criteria.getGenre() != null) {
                return searchByCriteria(criteria);
            } else {
                return getAllBooks();
            }
        }
    }

    private boolean filterBook(Book book, BookSearch criteria) {
        if (criteria.getGenre() != null && !book.getGenre().toLowerCase().contains(criteria.getGenre().toLowerCase())) {
            return false;
        }
        if (criteria.getTitle() != null && !book.getTitle().toLowerCase().contains(criteria.getTitle().toLowerCase())) {
            return false;
        }
        return true;
    }

    private Set<Book> searchByCriteria(BookSearch criteria) {
        if (criteria.getGenre() != null) {
            if (criteria.getTitle() != null) {
                return bookRepository.findByTitleContainingIgnoreCaseOrGenreContainingIgnoreCase(criteria.getTitle(), criteria.getGenre());
            } else {
                return bookRepository.findByGenreContainingIgnoreCase(criteria.getGenre());
            }
        } else {
            return bookRepository.findByTitleContainingIgnoreCase(criteria.getTitle());
        }
    }

}
