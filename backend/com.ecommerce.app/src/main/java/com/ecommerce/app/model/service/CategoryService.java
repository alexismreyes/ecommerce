package com.ecommerce.app.model.service;

import com.ecommerce.app.model.entity.Category;
import com.ecommerce.app.model.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> listAllCategories(){

        return categoryRepo.findAll();
    }

}
