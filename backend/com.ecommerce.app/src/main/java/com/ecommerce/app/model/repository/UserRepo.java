package com.ecommerce.app.model.repository;

import com.ecommerce.app.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u  WHERE u.email= :email ")
    User findByEmail(@Param("email") String email);


}
