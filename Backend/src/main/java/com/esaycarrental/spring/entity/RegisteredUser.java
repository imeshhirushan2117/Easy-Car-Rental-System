package com.esaycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;



@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class RegisteredUser {
    @Id
    private String regUserId;
    private String name;
    private String address;
    private String nicNo;
    private String drivingLicenseNo;
    private String mobileNo;
    private String password;
    private String email;

    @OneToMany(targetEntity = CustomerVerificationImg.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "customerID", referencedColumnName = "regUserId")
    private List<CustomerVerificationImg> imgs;
}
