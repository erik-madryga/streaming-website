package net.yorksolutions.backend.controller;

import net.yorksolutions.backend.model.UserModel;
import net.yorksolutions.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository repository;

    @CrossOrigin
    @PostMapping("/add")
    String add(@RequestBody UserModel user) {
        repository.save(user);
        return "🐺";
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "🐺";
    }

    @CrossOrigin
    @PutMapping("/edit")
    String edit(@RequestBody UserModel user) {
        repository.findById(user.getId()).orElseThrow();
        repository.save(user);
        return "🐺";
    }

    @CrossOrigin
    @GetMapping("/all")
    Iterable<UserModel> all() {
        return repository.findAll();
    }
}
