package com.ecommerce.app.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;



}
