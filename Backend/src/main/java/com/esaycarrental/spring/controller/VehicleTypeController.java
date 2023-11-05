package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.VehicleTypeDTO;
import com.esaycarrental.spring.service.VehicleTypeService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/vehicleType")
@CrossOrigin
public class VehicleTypeController {

    @Autowired
    VehicleTypeService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicleTypes() {
        return new ResponseUtil(200, "Ok", service.getAllVehicleType());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicleType(@ModelAttribute VehicleTypeDTO typeDTO) {
        service.saveVehicleType(typeDTO);
        return new ResponseUtil(200, "New Vehicle Type Added Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicleType(@RequestParam String typeId) {
        service.deleteVehicleType(typeId);
        return new ResponseUtil(200, "Vehicle Type Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicleType(@RequestBody VehicleTypeDTO typeDTO) {
        service.updateVehicleType(typeDTO);
        return new ResponseUtil(200, "Vehicle Type Update Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", service.generateVehicleTypeId());
    }

}
