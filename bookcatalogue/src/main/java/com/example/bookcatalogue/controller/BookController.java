package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.dto.BookSearch;
import com.example.bookcatalogue.model.Book;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/books")
    public Set<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/searchBook")
    public Set<Book> searchBook(@RequestBody BookSearch bookSearch) {
        return bookService.searchBook(bookSearch);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addBook")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @Role({User.Role.ADMIN})
    @PutMapping("/updateBook")
    public Book updateBook(@RequestBody Book book) {
        return bookService.updateBook(book);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.ok(bookService.getAllBooks());
    }

}
