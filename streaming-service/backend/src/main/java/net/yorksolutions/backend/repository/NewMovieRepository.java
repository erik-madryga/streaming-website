package net.yorksolutions.backend.repository;

import net.yorksolutions.backend.model.NewMovieModel;
import org.springframework.data.repository.CrudRepository;

public interface NewMovieRepository extends CrudRepository<NewMovieModel, Long> {
}
