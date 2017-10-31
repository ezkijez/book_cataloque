package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.repository.UserRepository;
import com.example.bookcatalogue.service.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static com.example.bookcatalogue.model.User.Role.USER;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    Session session;

    @Autowired
    UserRepository userRepository;

    @RequestMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> dbUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (dbUser.isPresent()) {
            session.setUser(dbUser.get());
            return "logged in";
        } else {
            return "invalid username and/or password";
        }
    }

    @GetMapping("/isLoggedIn")
    public String isLoggedIn() {
        if (session.getUser() == null) {
            return "not logged in";
        } else {
            return session.getUser().toString();
        }
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user) {
        user.setRole(USER);
        userRepository.save(user);
        return "redirect";
    }
}
