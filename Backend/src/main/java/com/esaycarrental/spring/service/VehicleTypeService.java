package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.VehicleTypeDTO;

import java.util.List;



public interface VehicleTypeService {
    void saveVehicleType(VehicleTypeDTO typeDTO);

    void deleteVehicleType(String typeId);

    void updateVehicleType(VehicleTypeDTO typeDTO);

    List<VehicleTypeDTO> getAllVehicleType();

    String generateVehicleTypeId();
}
