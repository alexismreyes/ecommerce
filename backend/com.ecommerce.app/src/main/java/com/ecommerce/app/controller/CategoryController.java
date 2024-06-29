package com.ecommerce.app.controller;

import com.ecommerce.app.model.entity.Category;
import com.ecommerce.app.model.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    public ResponseEntity<List<Category>> getCategories(){

        List<Category> categories = categoryService.listAllCategories();

        System.out.println(categories);

        return new ResponseEntity<>(categories, HttpStatus.OK);

    }




}
