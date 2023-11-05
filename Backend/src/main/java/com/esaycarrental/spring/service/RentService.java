package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.RentDTO;

import java.util.List;



public interface RentService {

    void saveRent(RentDTO rentDTO);

    void deleteRent(String rentId);

    void updateRent(RentDTO rentDTO);

    List<RentDTO> getAllRents();

}
