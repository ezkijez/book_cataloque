package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.model.Author;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping("/{id}")
    public Author getAuthor(@PathVariable Long id) {
        return authorService.getAuthorById(id);
    }

    @GetMapping("/authors")
    public List<Author> getAuthors() {
        return authorService.getAllAuthors();
    }

    @GetMapping("/searchAuthor/{searchTerm}")
    public List<Author> searchAuthor(@PathVariable String searchTerm) {
        return authorService.searchAuthor(searchTerm);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping("/addAuthor")
    public Author addAuthor(@RequestBody Author author) {
        return authorService.addAuthor(author);
    }

    @Role({User.Role.ADMIN})
    @PutMapping("/updateAuthor")
    public Author updateAuthor(@RequestBody Author author) {
        return authorService.updateAuthor(author);
    }

    @Role({User.Role.ADMIN})
    @DeleteMapping("/deleteAuthor/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        authorService.deleteAuthor(id);
    }
}
