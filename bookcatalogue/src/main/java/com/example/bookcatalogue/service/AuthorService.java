package com.example.bookcatalogue.service;

import com.example.bookcatalogue.model.Author;
import com.example.bookcatalogue.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> searchAuthor(String searchTerm) {
        return authorRepository.findByNameContainingIgnoreCase(searchTerm);
    }

    public Author getAuthorById(Long id) {
        return authorRepository.findOne(id);
    }

    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    public Author addAuthor(Author author) {
        return authorRepository.save(author);
    }

    public Author updateAuthor(Author author) {
        return author.getId() == null ? author : authorRepository.save(author);
    }

    public void deleteAuthor(Long id) {
        authorRepository.delete(id);
    }
}
