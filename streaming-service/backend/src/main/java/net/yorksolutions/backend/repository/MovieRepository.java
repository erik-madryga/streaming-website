package net.yorksolutions.backend.repository;

import net.yorksolutions.backend.model.MovieModel;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<MovieModel, Long> {
}
