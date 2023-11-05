package com.esaycarrental.spring.repo;

import com.esaycarrental.spring.entity.DriveSchedule;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DriveScheduleRepo extends JpaRepository<DriveSchedule,String> {
}
