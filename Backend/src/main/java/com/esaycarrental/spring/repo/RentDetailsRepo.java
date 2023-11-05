package com.esaycarrental.spring.repo;

import com.esaycarrental.spring.entity.RentDetails;
import org.springframework.data.jpa.repository.JpaRepository;



public interface RentDetailsRepo extends JpaRepository<RentDetails,String> {
}
