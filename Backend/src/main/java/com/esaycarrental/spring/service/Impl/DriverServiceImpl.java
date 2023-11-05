package com.esaycarrental.spring.service.Impl;

import com.esaycarrental.spring.dto.DriverDTO;
import com.esaycarrental.spring.entity.Driver;
import com.esaycarrental.spring.repo.DriverRepo;
import com.esaycarrental.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (!repo.existsById(driverDTO.getDriverId())){
            repo.save(mapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver Already Exist");
        }
    }

    @Override
    public void deleteDriver(String driverId) {
        if (repo.existsById(driverId)){
            repo.deleteById(driverId);
        }else {
            throw new RuntimeException("Please check the Driver ID... No Such Driver to Delete!");
        }
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        if (repo.existsById(driverDTO.getDriverId())){
            repo.save(mapper.map(driverDTO,Driver.class));
        }else {
            throw new RuntimeException("Please check the Driver ID... No Such Driver to Update!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>(){}.getType());
    }

    @Override
    public String generateDriverId() {
        long count = repo.count();
        String id = "D00-000";

        if (count != 0) {
            String generateDriverId = repo.generateDriverId();
            int tempId = Integer.parseInt(generateDriverId.split("-")[1]);
            tempId += 1;
            if (tempId < 10) {
                id = "D00-00" + tempId;
            } else if (tempId < 100) {
                id = "D00-0" + tempId;
            } else if (tempId < 1000) {
                id = "D00-" + tempId;
            }
        } else {
            id = "D00-000";
        }
        return id;
    }
}
