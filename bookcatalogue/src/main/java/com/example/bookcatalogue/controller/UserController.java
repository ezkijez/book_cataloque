package com.example.bookcatalogue.controller;

import com.example.bookcatalogue.exception.UserNotValidException;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/isLoggedIn")
    public String user() {
        if (userService.isLoggedIn()) {
            return userService.getUser().toString();
        } else {
            return "not logged in";
        }
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        try {
            return userService.login(user);
        } catch (UserNotValidException e) {
            return null;
        }
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

}
