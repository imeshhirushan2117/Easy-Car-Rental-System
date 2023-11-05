package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.VehicleDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface VehicleService {

    void saveVehicle(VehicleDTO vehicleDTO);

    void deleteVehicle(String registrationNumber);

    void updateVehicle(VehicleDTO vehicleDTO);

    List<VehicleDTO> getAllVehicles();

    List<VehicleDTO> getAllVehiclesByStatus(String status);

    long countByStatus(String status);

    VehicleDTO vehicleDetails(String regNo);

    void saveVehicleWithImg(String vehicle, MultipartFile file);

    String generateVehicleId();

}
