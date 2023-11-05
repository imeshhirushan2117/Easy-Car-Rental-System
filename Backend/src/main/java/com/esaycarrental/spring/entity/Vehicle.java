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
public class Vehicle {
    @Id
    private String registrationNumber;
    private String brand;
    private String color;
    private String status;
    private int noOfPassengers;
    private double runningKm;
    private String fuelType;
    private String transmissionType;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "type", referencedColumnName = "vehicleTypeId", nullable = false)
    private VehicleType type;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "rates", referencedColumnName = "rateId", nullable = false)
    private Rates rates;

    @OneToMany(targetEntity = CarImg.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "carId", referencedColumnName = "registrationNumber")
    private List<CarImg> imgs;
}
