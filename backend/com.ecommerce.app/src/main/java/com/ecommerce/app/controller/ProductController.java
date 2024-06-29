package com.ecommerce.app.controller;

import com.ecommerce.app.model.entity.Product;
import com.ecommerce.app.model.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;


    /*@GetMapping("/")
    public String index(){
        return "your are in ProductController local changed";
    }*/

    @GetMapping("/")
    public ResponseEntity<List<Product>> getProducts(){

        List<Product> products = productService.getAllProducts();

        return new ResponseEntity<>(products,HttpStatus.OK);

    }



}
