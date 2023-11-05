package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.StaffDTO;
import com.esaycarrental.spring.service.StaffService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/staff")
@CrossOrigin
public class StaffController {

    @Autowired
    StaffService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllStaffs() {
        return new ResponseUtil(200, "Ok", service.getAllStaffs());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveStaff(@ModelAttribute StaffDTO staffDTO) {
        service.saveStaff(staffDTO);
        return new ResponseUtil(200, "New Staff Added Successfully", null);
    }

    @DeleteMapping
    public ResponseUtil deleteStaff(@RequestParam String staffId) {
        service.deleteStaff(staffId);
        return new ResponseUtil(200, "Staff Delete Successfully", null);
    }

    @PutMapping
    public ResponseUtil updateStaff(@RequestBody StaffDTO staffDTO) {
        service.updateStaff(staffDTO);
        return new ResponseUtil(200, "Staff Update Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", service.generateStaffId());
    }
}

