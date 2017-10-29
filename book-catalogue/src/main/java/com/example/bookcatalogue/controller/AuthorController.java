package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.model.Author;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Optional;

@Controller
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/add")
    public String addAuthor(Model model) {
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
    @GetMapping("/searchauthor/{searchTerm}")
    public ModelAndView searschAuthor(@PathVariable("searchTerm") String author){
        ModelAndView mav = new ModelAndView("searchauthor");
        mav.addObject("searchTerm", author);
        ArrayList<Author> authors = new ArrayList<>(authorRepository.findAll());
        ArrayList<Author> result =new ArrayList<Author>();
        for(Author a: authors){
            if (a.getName().contains(author)){
                result.add(a);
            }
        }
        mav.addObject("searchResult", result);
        return mav;
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
