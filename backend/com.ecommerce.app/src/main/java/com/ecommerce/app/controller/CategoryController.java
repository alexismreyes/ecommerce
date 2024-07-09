package com.ecommerce.app.controller;

import com.ecommerce.app.model.entity.Category;
import com.ecommerce.app.model.entity.Product;
import com.ecommerce.app.model.service.CategoryService;
import com.ecommerce.app.model.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = {"http://localhost:5173"}) //Authorize all incoming requests from vite frontend
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    /*@Autowired
    private ProductService productService;*/

    @GetMapping("/")
    public ResponseEntity<List<Category>> getCategories(){

        List<Category> categories = categoryService.listAllCategories();

        System.out.println(categories);

        return new ResponseEntity<>(categories, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Product>> getProductsByCategoryId(@PathVariable(value="id") Long id ){

        List<Product> products = categoryService.getProductsByCategoryId(id);

        return new ResponseEntity<>(products,HttpStatus.OK);

    }




}
