package com.esaycarrental.spring.service.Impl;

import com.esaycarrental.spring.dto.CarImgDTO;
import com.esaycarrental.spring.dto.RatesDTO;
import com.esaycarrental.spring.dto.VehicleDTO;
import com.esaycarrental.spring.dto.VehicleTypeDTO;
import com.esaycarrental.spring.entity.CarImg;
import com.esaycarrental.spring.entity.Vehicle;
import com.esaycarrental.spring.repo.RatesRepo;
import com.esaycarrental.spring.repo.VehicleRepo;
import com.esaycarrental.spring.repo.VehicleTypeRepo;
import com.esaycarrental.spring.service.VehicleService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;



@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private RatesRepo ratesRepo;

    @Autowired
    private VehicleTypeRepo vehicleTypeRepo;

    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (!repo.existsById(vehicleDTO.getRegistrationNumber())) {

            if (vehicleTypeRepo.existsById(vehicleDTO.getType().getVehicleTypeId())) {
                VehicleTypeDTO type = mapper.map(vehicleTypeRepo.findByVehicleTypeId(vehicleDTO.getType().getVehicleTypeId()), VehicleTypeDTO.class);
                vehicleDTO.setType(type);
            } else {
                throw new RuntimeException("Please Check the Vehicle Type ID");
            }

            if (ratesRepo.existsById(vehicleDTO.getRates().getRateId())) {
                RatesDTO rates = mapper.map(ratesRepo.findByRateId(vehicleDTO.getRates().getRateId()), RatesDTO.class);
                vehicleDTO.setRates(rates);
            } else {
                throw new RuntimeException("Please Check the RateID");
            }

//            System.out.println("\nchange : "+ vehicleDTO+"\n");
            repo.save(mapper.map(vehicleDTO, Vehicle.class));
        } else {
            throw new RuntimeException("Vehicle Already Exist");
        }
    }

    @Override
    public void deleteVehicle(String registrationNumber) {
        if (repo.existsById(registrationNumber)) {
            repo.deleteById(registrationNumber);
        } else {
            throw new RuntimeException("Please check the Registration Number... No Such Vehicle to Delete!");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        if (repo.existsById(vehicleDTO.getRegistrationNumber())) {

            if (vehicleTypeRepo.existsById(vehicleDTO.getType().getVehicleTypeId())) {
                VehicleTypeDTO type = mapper.map(vehicleTypeRepo.findByVehicleTypeId(vehicleDTO.getType().getVehicleTypeId()), VehicleTypeDTO.class);
                vehicleDTO.setType(type);
            } else {
                throw new RuntimeException("Please Check the Vehicle Type ID");
            }

            if (ratesRepo.existsById(vehicleDTO.getRates().getRateId())) {
                RatesDTO rates = mapper.map(ratesRepo.findByRateId(vehicleDTO.getRates().getRateId()), RatesDTO.class);
                vehicleDTO.setRates(rates);
            } else {
                throw new RuntimeException("Please Check the RateID");
            }

            repo.save(mapper.map(vehicleDTO, Vehicle.class));
        } else {
            throw new RuntimeException("Please check the Registration Number... No Such Vehicle to Update!");
        }
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllVehiclesByStatus(String status) {
        return mapper.map(repo.searchVehiclesByStatus(status), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public long countByStatus(String status) {
        return repo.countVehiclesByStatus(status);
    }

    @Override
    public VehicleDTO vehicleDetails(String regNo) {
        return mapper.map(repo.findById(regNo), VehicleDTO.class);
    }

    @Override
    public void saveVehicleWithImg(String vehicle, MultipartFile file) {
        VehicleDTO vehicleDTO = null;
        String path = null;
        try {
            vehicleDTO = objectMapper.readValue(vehicle, VehicleDTO.class);
            /*CarImg img = new CarImg("Img001", "");
            ArrayList<CarImg> carImgs = new ArrayList<>();
            carImgs.add(img);
            vehicleDTO.setImgs(carImgs);*/
            System.out.println(vehicleDTO);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        if (!repo.existsById(vehicleDTO.getRegistrationNumber())) {
            System.out.println("-------------------------");
            /*if (vehicleTypeRepo.existsById(vehicleDTO.getType().getVehicleTypeId())) {
                System.out.println("-----------Type--------------");
                VehicleTypeDTO type = mapper.map(vehicleTypeRepo.findByVehicleTypeId(vehicleDTO.getType().getVehicleTypeId()), VehicleTypeDTO.class);
                vehicleDTO.setType(type);
            } else {
                throw new RuntimeException("Please Check the Vehicle Type ID");
            }
            if (ratesRepo.existsById(vehicleDTO.getRates().getRateId())) {
                RatesDTO rates = mapper.map(ratesRepo.findByRateId(vehicleDTO.getRates().getRateId()), RatesDTO.class);
                vehicleDTO.setRates(rates);
                System.out.println("------------rates-------------");
            } else {
                throw new RuntimeException("Please Check the RateID");
            }*/


//            for (CarImg img : vehicleDTO.getImgs()) {
            System.out.println("-------------------------");
                try {
                    String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                    File uploadDir = new File(projectPath + "/uploads");
                    uploadDir.mkdir();
                    file.transferTo(new File(uploadDir.getAbsolutePath() + "/" +vehicleDTO.getRegistrationNumber()+"_"+  file.getOriginalFilename()));
                    path = "uploads/" +vehicleDTO.getRegistrationNumber()+"_"+ file.getOriginalFilename();
                } catch (URISyntaxException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            CarImgDTO imgDTO = new CarImgDTO();
                imgDTO.setPath(path);
            ArrayList<CarImgDTO> carImgDTOS = new ArrayList<CarImgDTO>();
            carImgDTOS.add(imgDTO);
            System.out.println(imgDTO.getPath());
//            }
            vehicleDTO.setImgs(carImgDTOS);
            repo.save(mapper.map(vehicleDTO, Vehicle.class));

        } else {
            throw new RuntimeException("Vehicle Already Exist");
        }
    }

    @Override
    public String generateVehicleId() {
        long count = repo.count();
        String id = "V00-000";

        if (count != 0) {
            String generateVehicleId = repo.generateVehicleId();
            int tempId = Integer.parseInt(generateVehicleId.split("-")[1]);
            tempId += 1;
            if (tempId < 10) {
                id = "V00-00" + tempId;
            } else if (tempId < 100) {
                id = "V00-0" + tempId;
            } else if (tempId < 1000) {
                id = "V00-" + tempId;
            }
        } else {
            id = "V00-000";
        }
        return id;
    }
}
