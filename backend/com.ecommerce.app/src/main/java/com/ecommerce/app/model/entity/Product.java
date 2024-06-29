package com.ecommerce.app.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="Product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private float price;

    @Column
    private Integer stock;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private Category category_id;

    @Column
    private Date created_at;

}
