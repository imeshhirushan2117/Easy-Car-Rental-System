package com.esaycarrental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;



@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RegisteredUserDTO {
    private String regUserId;
    private String name;
    private String address;
    private String nicNo;
    private String drivingLicenseNo;
    private String mobileNo;
    private String password;
    private String email;
    private List<CustomerVerificationImgDTO> imgs;
}
