package com.esaycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Staff {
    @Id
    private String staffId;
    private String name;
    private String address;
    private String mobileNo;
    private String type;
    private String email;
    private String password;
}
