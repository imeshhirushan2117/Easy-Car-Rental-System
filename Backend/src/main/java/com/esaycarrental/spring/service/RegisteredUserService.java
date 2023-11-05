package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.RegisteredUserDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;



public interface RegisteredUserService {
    void saveUser(RegisteredUserDTO registeredUserDTO);

    void deleteUser(String userId);

    void updateUser(RegisteredUserDTO userDTO);

    List<RegisteredUserDTO> getAllUsers();

    long countUsers();

    void saveCustomerWithImg(String customer, MultipartFile file);

    String generateCustomerId();

}
