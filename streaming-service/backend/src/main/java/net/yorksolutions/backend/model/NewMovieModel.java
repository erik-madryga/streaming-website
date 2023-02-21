package net.yorksolutions.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;

@Entity
public class NewMovieModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty
    Long id;

        @JsonProperty
        String name;

        @JsonProperty
        Long sku;

        @JsonProperty
        Date releaseDate;

        @JsonProperty
        String plot;

    @JsonProperty
    String genre;


    public NewMovieModel() {
    }

    public Long getId() {
        return id;
    }
}
