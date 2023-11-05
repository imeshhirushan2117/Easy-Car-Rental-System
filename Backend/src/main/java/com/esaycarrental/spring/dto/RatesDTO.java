package com.esaycarrental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RatesDTO {
    private String rateId;
    private double monthlyRate;
    private double dailyRate;
    private double freeKmForaMonth;
    private double freeKmForaDay;
    private double pricePerExtraKm;
}
