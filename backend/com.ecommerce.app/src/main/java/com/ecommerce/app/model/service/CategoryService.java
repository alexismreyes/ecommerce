package com.ecommerce.app.model.service;

import com.ecommerce.app.model.entity.Category;
import com.ecommerce.app.model.entity.Product;
import com.ecommerce.app.model.repository.CategoryRepo;
import com.ecommerce.app.model.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ProductRepo productRepo;

    public List<Category> listAllCategories(){

        return categoryRepo.findAll();
    }

    public List<Product> getProductsByCategoryId(Long id){
        return productRepo.getProductByCategoryId(id);
    }

}
