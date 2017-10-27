package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.repository.UserRepository;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.service.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Optional;


@RestController
    @RequestMapping("/auth")
    public class AuthController {
        @Autowired
        Session session;

        @Autowired
        UserRepository userRepository;

        @RequestMapping("/login")
        public String login(@RequestBody User user) {
            Optional<User> dbUser =
                    userRepository.findByEmailAndPassword(user.getEmail(),
                            user.getPassword());
            if (dbUser.isPresent()) {
                session.setUser(dbUser.get());
                return "logged in";
            } else {
                return "invalid username and/or password";
            }
        }

        @GetMapping("/isloggedin")
        public String isLoggedIn() {
            if (session.getUser() == null) {
                return "not logged in";
            } else {
                return session.getUser().toString();
            }
        }
    }
