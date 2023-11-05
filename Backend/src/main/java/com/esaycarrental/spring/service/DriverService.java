package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.DriverDTO;
import com.esaycarrental.spring.dto.StaffDTO;
import com.esaycarrental.spring.entity.Staff;

import java.util.List;

public interface DriverService {

    void saveDriver(DriverDTO driverDTO);

    void deleteDriver(String driverId);

    void updateDriver(DriverDTO driverDTO);

    List<DriverDTO> getAllDrivers();

    String generateDriverId();
}
