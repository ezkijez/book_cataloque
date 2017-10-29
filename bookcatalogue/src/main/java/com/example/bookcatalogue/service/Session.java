package com.example.bookcatalogue.service;

import com.example.bookcatalogue.model.User;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Data
@Service
@SessionScope
public class Session {
    private User user;
}