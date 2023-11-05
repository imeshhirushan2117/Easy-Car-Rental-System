package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.DriverDTO;
import com.esaycarrental.spring.service.DriverService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil(200,"Ok",service.getAllDrivers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO driverDTO){
        service.saveDriver(driverDTO);
        return new ResponseUtil(200, "New Driver Added Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String driverId){
        service.deleteDriver(driverId);
        return new ResponseUtil(200, "Driver Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO){
        service.updateDriver(driverDTO);
        return new ResponseUtil(200, "Driver Update Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", service.generateDriverId());
    }
}
