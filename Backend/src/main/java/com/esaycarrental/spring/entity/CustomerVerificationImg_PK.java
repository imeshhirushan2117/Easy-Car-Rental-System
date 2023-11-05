package com.esaycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;



@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerVerificationImg_PK implements Serializable {
    private String verificationimgId;
    private String customerID;
}
