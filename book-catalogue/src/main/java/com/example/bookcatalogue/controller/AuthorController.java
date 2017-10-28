package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.model.Author;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.repository.AuthorRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
public class AuthorController {
    private AuthorRepository authorRepository;

    @GetMapping("/addauthor")
    public String register(Model model) {
        model.addAttribute("author", new Author());
        return "addauthor";
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/addauthor")
    public String addAuthor(@ModelAttribute Author author){
        authorRepository.save(author);
        return "redirect:/index";
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/deleteauthor")
    public String deleteAuthor(@RequestParam("author") long authorId){
        Author author  = authorRepository.findById(authorId).get();
        if(author != null){
            authorRepository.delete(author);
        }
        return "redirect:/index";
    }
}
