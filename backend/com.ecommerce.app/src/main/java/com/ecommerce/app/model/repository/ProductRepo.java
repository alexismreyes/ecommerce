package com.ecommerce.app.model.repository;

import com.ecommerce.app.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

    @Query("SELECT o FROM Product o JOIN FETCH o.category_id c WHERE c.id=?1 ORDER BY o.category_id.id asc")
    List<Product> getProductByCategoryId(@Param("id") Long id);

}
