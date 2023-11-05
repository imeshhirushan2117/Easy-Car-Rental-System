package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.RentDTO;
import com.esaycarrental.spring.service.RentService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRents() {
        return new ResponseUtil(200, "Ok", service.getAllRents());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes="application/json")
    public ResponseUtil saveRent(@RequestBody RentDTO rentDTO) {
        System.out.println("\nsave : "+rentDTO.toString());
        service.saveRent(rentDTO);
        return new ResponseUtil(200, "New Rent Added Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRent(@RequestParam String rentId) {
        service.deleteRent(rentId);
        return new ResponseUtil(200, "Rent Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRent(@RequestBody RentDTO rentDTO) {
        service.updateRent(rentDTO);
        return new ResponseUtil(200, "Rent Update Successfully", null);
    }

}
