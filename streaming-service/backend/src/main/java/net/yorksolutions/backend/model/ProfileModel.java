package net.yorksolutions.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class ProfileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty
    Long id;

    @JsonProperty
    String profileName;

    @JsonProperty
    Integer profileAge;

    @JsonProperty
    String profilePronouns;

    @JsonProperty
    String profileColor;

    @JsonProperty
    String profilePicture;

    public ProfileModel() {
    }

    public ProfileModel(Long id, String profileName, Integer profileAge, String profilePronouns, String profileColor, String profilePicture) {
        this.id = id;
        this.profileName = profileName;
        this.profileAge = profileAge;
        this.profilePronouns = profilePronouns;
        this.profileColor = profileColor;
        this.profilePicture = profilePicture;
    }

    public Long getId() {
        return id;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public Integer getProfileAge() {
        return profileAge;
    }

    public void setProfileAge(Integer profileAge) {
        this.profileAge = profileAge;
    }

    public String getProfilePronouns() {
        return profilePronouns;
    }

    public void setProfilePronouns(String profilePronouns) {
        this.profilePronouns = profilePronouns;
    }

    public String getProfileColor() {
        return profileColor;
    }

    public void setProfileColor(String profileColor) {
        this.profileColor = profileColor;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
}
