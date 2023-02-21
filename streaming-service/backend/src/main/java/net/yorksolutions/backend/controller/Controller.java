package net.yorksolutions.backend.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.yorksolutions.backend.repository.NewMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class Controller {

    private static class BBImage {
        @JsonProperty
        String href;
    }

    private static class Product {
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

        @JsonProperty
        ArrayList<BBImage> images;
    }

    private static class BBResult {
        @JsonProperty
        ArrayList<Product> products;
    }


    @GetMapping
    BBResult get() {
        var url = "https://api.bestbuy.com/v1/products(categoryPath.id=cat02015)?format=json&show=name,sku,releaseDate,plot,genre,images&apiKey=rZF37GU0d0GrH2JG44TOVzYo&pageSize=100&format=json";
        return new RestTemplate().exchange(url, HttpMethod.GET, null, BBResult.class).getBody();
    }
}