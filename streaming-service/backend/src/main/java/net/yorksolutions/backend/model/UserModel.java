package net.yorksolutions.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty
    Long id;

    @JsonProperty
    String username;

    @JsonProperty
    String password;

    @JsonProperty
    String firstName;

    @JsonProperty
    String lastName;

    @JsonProperty
    String email;

    @JsonProperty
    String bDay;



    public Long getId() {
        return id;
    }

    public UserModel() {
    }

    public UserModel(Long id, String username, String password, String firstName, String lastName, String email, String bDay) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bDay = bDay;
    }
}

