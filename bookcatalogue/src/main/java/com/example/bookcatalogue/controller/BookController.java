package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.annotation.Role;
import com.example.bookcatalogue.model.Book;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@Controller
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public String listBooks(Model model){
        Iterable<Book> t = bookRepository.findAll();
        model.addAttribute("books",t);
        return "books";
    }

    @GetMapping("/search")
    public String searchBook(@RequestBody Book book){

        List<Book> dbBookList=
                bookRepository.findByTitleAndGenreAndPublicationDate(book.getTitle(),book.getGenre(), book.getPublicationDate());
        if(dbBookList.size()==0)
            return "failedSearch";
        else
            return "results";
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/addBook")
    public String addBook(@ModelAttribute Book book){
        bookRepository.save(book);
        return "redirect:/books";
    }
}
