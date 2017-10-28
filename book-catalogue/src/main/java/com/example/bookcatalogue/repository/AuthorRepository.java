package com.example.bookcatalogue.repository;

import com.example.bookcatalogue.model.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorRepository extends CrudRepository<Author, String> {
    Optional<Author> findById(Long id);
}
