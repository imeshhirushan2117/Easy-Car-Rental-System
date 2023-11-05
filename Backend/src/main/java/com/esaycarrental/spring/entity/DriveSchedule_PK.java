package com.esaycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriveSchedule_PK implements Serializable {
    private String registrationNumber;
    private String rentId;
    private String driverId;
}
