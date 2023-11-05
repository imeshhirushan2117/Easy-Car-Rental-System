package com.esaycarrental.spring.dto;

import com.esaycarrental.spring.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;



@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleWithImgDTO {
    private String vehicle;
    private MultipartFile file;
}
