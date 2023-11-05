package com.esaycarrental.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriveScheduleDTO {
    private String registrationNumber;
    private String rentId;
    private String driverId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checking;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
}
