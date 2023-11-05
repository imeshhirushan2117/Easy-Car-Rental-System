package com.esaycarrental.spring.repo;

import com.esaycarrental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface DriverRepo extends JpaRepository<Driver, String> {

    @Query(value = "SELECT driverId FROM driver ORDER BY driverId DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

}
