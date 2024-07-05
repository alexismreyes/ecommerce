package com.ecommerce.app.model.service;

import com.ecommerce.app.model.entity.User;
import com.ecommerce.app.model.repository.UserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PasswordMigrationService {

    @Autowired
    private UserRepo userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostConstruct
    public void migratePasswords() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            String currentPassword = user.getPassword();
            if (!currentPassword.startsWith("$2a$")) { // BCrypt hash starts with $2a$
                String encodedPassword = passwordEncoder.encode(currentPassword);
                user.setPassword(encodedPassword);
                userRepository.save(user); // Update the user with the encoded password
            }
        }
    }
}
