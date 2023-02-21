package net.yorksolutions.backend.controller;

import net.yorksolutions.backend.model.MovieModel;
import net.yorksolutions.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    MovieRepository repository;

    @CrossOrigin
    @PostMapping("/add")
    String add(@RequestBody MovieModel movie) {
        repository.save(movie);
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
    String edit(@RequestBody MovieModel movie) {
        repository.findById(movie.getId()).orElseThrow();
        repository.save(movie);
        return "🐺";
    }

    @CrossOrigin
    @GetMapping("/all")
    Iterable<MovieModel> all() {return repository.findAll();}
}
