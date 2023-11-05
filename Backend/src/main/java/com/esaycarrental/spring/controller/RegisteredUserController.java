package com.esaycarrental.spring.controller;

import com.esaycarrental.spring.dto.RegisteredUserDTO;
import com.esaycarrental.spring.service.RegisteredUserService;
import com.esaycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("api/user")
@CrossOrigin
public class RegisteredUserController {

    @Autowired
    RegisteredUserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllUsers() {
        return new ResponseUtil(200, "Ok", userService.getAllUsers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveUser(@ModelAttribute RegisteredUserDTO userDTO) {
        userService.saveUser(userDTO);
        return new ResponseUtil(200, "New User Create Successfully", null);
    }

    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteUser(@RequestParam String regUserId) {
        userService.deleteUser(regUserId);
        return new ResponseUtil(200, "User Delete Successfully", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateUser(@RequestBody RegisteredUserDTO dto) {
        userService.updateUser(dto);
        return new ResponseUtil(200, "User Update Successfully", null);
    }

    @GetMapping(path = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil userCount() {
        return new ResponseUtil(200, "Ok", userService.countUsers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadFile(@RequestParam("file") MultipartFile myFile, @RequestParam("customer") String customer){
        System.out.println("Hey");
        System.out.println(customer);
        System.out.println(myFile.getName());

        userService.saveCustomerWithImg(customer,myFile);
        return new ResponseUtil(200, "New User Create Successfully", null);
    }

    @GetMapping(value = "/generate",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getGenerateID() {
        return new ResponseUtil(200, "Ok", userService.generateCustomerId());
    }
}
