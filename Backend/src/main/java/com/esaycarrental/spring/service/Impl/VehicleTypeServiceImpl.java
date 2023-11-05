package com.esaycarrental.spring.service.Impl;

import com.esaycarrental.spring.dto.VehicleTypeDTO;
import com.esaycarrental.spring.entity.VehicleType;
import com.esaycarrental.spring.repo.VehicleTypeRepo;
import com.esaycarrental.spring.service.VehicleTypeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;



@Service
@Transactional
public class VehicleTypeServiceImpl implements VehicleTypeService {

    @Autowired
    private VehicleTypeRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicleType(VehicleTypeDTO typeDTO) {
        if (!repo.existsById(typeDTO.getVehicleTypeId())) {
            repo.save(mapper.map(typeDTO, VehicleType.class));
        } else {
            throw new RuntimeException("User Already Exist");
        }
    }

    @Override
    public void deleteVehicleType(String typeId) {
        if (repo.existsById(typeId)) {
            repo.deleteById(typeId);
        } else {
            throw new RuntimeException("Please check the Vehicle Type ID... No Such Vehicle Type to Delete!");
        }
    }

    @Override
    public void updateVehicleType(VehicleTypeDTO typeDTO) {
        if (repo.existsById(typeDTO.getVehicleTypeId())) {
            repo.save(mapper.map(typeDTO, VehicleType.class));
        } else {
            throw new RuntimeException("Please check the Vehicle Type ID... No Such Vehicle Type to Update!");
        }
    }

    @Override
    public List<VehicleTypeDTO> getAllVehicleType() {
        return mapper.map(repo.findAll(), new TypeToken<List<VehicleTypeDTO>>() {
        }.getType());
    }

    @Override
    public String generateVehicleTypeId() {
        long count = repo.count();
        String id = "T00-000";

        if (count != 0) {
            String generateVehicleTypeId = repo.generateVehicleTypeId();
            int tempId = Integer.parseInt(generateVehicleTypeId.split("-")[1]);
            tempId += 1;
            if (tempId < 10) {
                id = "T00-00" + tempId;
            } else if (tempId < 100) {
                id = "T00-0" + tempId;
            } else if (tempId < 1000) {
                id = "T00-" + tempId;
            }
        } else {
            id = "T00-000";
        }
        return id;
    }
}
