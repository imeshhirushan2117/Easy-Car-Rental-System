package com.esaycarrental.spring.service;

import com.esaycarrental.spring.dto.StaffDTO;
import com.esaycarrental.spring.entity.Staff;

import java.util.List;



public interface StaffService {

    void saveStaff(StaffDTO staffDTO);

    void deleteStaff(String staffId);

    void updateStaff(StaffDTO staffDTO);

    List<StaffDTO> getAllStaffs();

    String generateStaffId();
}
