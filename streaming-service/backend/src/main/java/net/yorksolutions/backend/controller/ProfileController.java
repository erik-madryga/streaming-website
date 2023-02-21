package net.yorksolutions.backend.controller;

import net.yorksolutions.backend.model.ProfileModel;
import net.yorksolutions.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    ProfileRepository repository;

    @CrossOrigin
    @PostMapping("/add")
    String add(@RequestBody ProfileModel profile) {
        repository.save(profile);
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
    String edit(@RequestBody ProfileModel profile) {
        repository.findById(profile.getId()).orElseThrow();
        repository.save(profile);
        return "🐺";
    }

    @CrossOrigin
    @GetMapping("/all")
    Iterable<ProfileModel> all() {
        return repository.findAll();
    }
}
