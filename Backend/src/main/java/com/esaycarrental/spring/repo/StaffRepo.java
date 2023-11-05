package com.esaycarrental.spring.repo;

import com.esaycarrental.spring.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface StaffRepo extends JpaRepository<Staff, String> {

    @Query(value = "SELECT staffId FROM staff ORDER BY staffId DESC LIMIT 1", nativeQuery = true)
    String generateStaffId();

}
