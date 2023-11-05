package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.RatesDTO;
import com.esaycarrental.spring.service.RatesService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/rates")
@CrossOrigin
public class RatesController {

    @Autowired
    RatesService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRates() {
        return new ResponseUtil(200, "Ok", service.getAllRates());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ResponseUtil saveRate(@ModelAttribute RatesDTO ratesDTO) {
        service.saveRates(ratesDTO);
        return new ResponseUtil(200, "New Rate Added Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRate(@RequestParam String rateID) {
        service.deleteRates(rateID);
        return new ResponseUtil(200, "Rate Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRate(@RequestBody RatesDTO ratesDTO) {
        service.updateRates(ratesDTO);
        return new ResponseUtil(200, "Rate Update Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", service.generateRatesId());
    }
}
