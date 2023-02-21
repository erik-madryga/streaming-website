package net.yorksolutions.backend.controller;

import net.yorksolutions.backend.model.NewMovieModel;
import net.yorksolutions.backend.repository.NewMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/newMovie")
public class NewMovieController {
    @Autowired
    NewMovieRepository repository;

    @CrossOrigin
    @PostMapping("/add")
    String add(@RequestBody NewMovieModel movie) {
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
    String edit(@RequestBody NewMovieModel movie) {
        repository.findById(movie.getId()).orElseThrow();
        repository.save(movie);
        return "🐺";
    }

    @CrossOrigin
    @GetMapping("/all")
    Iterable<NewMovieModel> all() {return repository.findAll();}
}
