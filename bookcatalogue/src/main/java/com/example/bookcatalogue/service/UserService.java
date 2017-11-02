package com.example.bookcatalogue.service;

import com.example.bookcatalogue.exception.UserNotValidException;
import com.example.bookcatalogue.model.User;
import com.example.bookcatalogue.repository.UserRepository;
import lombok.Data;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import static com.example.bookcatalogue.model.User.Role.USER;

@Data
@Service
@SessionScope
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private User user;

    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername()).get();
        }
        throw new UserNotValidException();
    }

    public User register(User user) {
        user.setRole(USER);
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        this.user = userRepository.save(user);
        return user;
    }

    private boolean isValid(User user) {
        User realUser = userRepository.findByUsername(user.getUsername()).get();
        return BCrypt.checkpw(user.getPassword(), realUser.getPassword());
    }

    public boolean isLoggedIn() {
        return user != null;
    }
}