package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.VehicleDTO;
import com.esaycarrental.spring.service.VehicleService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicles() {
        return new ResponseUtil(200, "Ok", service.getAllVehicles());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO dto) {
        service.saveVehicle(dto);
        return new ResponseUtil(200, "New Vehicle Added Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String regNo) {
        service.deleteVehicle(regNo);
        return new ResponseUtil(200, "Vehicle Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO dto) {
        service.updateVehicle(dto);
        return new ResponseUtil(200, "User Update Successfully", null);
    }
    @GetMapping(path = "/status",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllByStatus(@RequestParam String status) {
        return new ResponseUtil(200, "Ok", service.getAllVehiclesByStatus(status));
    }

    @GetMapping(path = "/count/status",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countAllByStatus(@RequestParam String status) {
        return new ResponseUtil(200, "Ok", service.countByStatus(status));
    }

    @GetMapping(path = "/regNo",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getVehicleDetails(@RequestParam String regNo) {
        return new ResponseUtil(200, "Ok", service.vehicleDetails(regNo));
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFile(@RequestParam("myFile") MultipartFile myFile,@RequestParam("vehicle") String vehicle){
        System.out.println("Hey");
        System.out.println(vehicle);
        System.out.println(myFile.getName());

        service.saveVehicleWithImg(vehicle,myFile);
        return new ResponseUtil(200, "New img Added Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", service.generateVehicleId());
    }
}
