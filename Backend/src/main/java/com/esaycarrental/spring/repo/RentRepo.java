package com.esaycarrental.spring.repo;

import com.esaycarrental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;



public interface RentRepo extends JpaRepository<Rent, String> {
}
