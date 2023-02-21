package net.yorksolutions.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MovieModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty
    Long id;

    @JsonProperty
    String movieTitle;

    @JsonProperty
    String movieYear;

    @JsonProperty
    String movieRating;

    @JsonProperty
    String movieDescription;

    @JsonProperty
    String moviePicture;

    public Long getId() {
        return id;
    }

    public MovieModel() {
    }

    public MovieModel(Long id, String movieTitle, String movieYear, String movieRating, String movieDescription, String moviePicture) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.movieYear = movieYear;
        this.movieRating = movieRating;
        this.movieDescription = movieDescription;
        this.moviePicture = moviePicture;
    }
}
