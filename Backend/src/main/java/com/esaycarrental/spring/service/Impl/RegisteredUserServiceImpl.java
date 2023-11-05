package com.esaycarrental.spring.service.Impl;

import com.esaycarrental.spring.dto.CustomerVerificationImgDTO;
import com.esaycarrental.spring.dto.RegisteredUserDTO;
import com.esaycarrental.spring.entity.CustomerVerificationImg;
import com.esaycarrental.spring.entity.RegisteredUser;
import com.esaycarrental.spring.repo.RegisteredUserRepo;
import com.esaycarrental.spring.service.RegisteredUserService;
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
public class RegisteredUserServiceImpl implements RegisteredUserService {

    @Autowired
    private RegisteredUserRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void saveUser(RegisteredUserDTO registeredUserDTO) {
        if (!repo.existsById(registeredUserDTO.getRegUserId())) {
            repo.save(mapper.map(registeredUserDTO, RegisteredUser.class));
        } else {
            throw new RuntimeException("User Already Exist");
        }
    }

    @Override
    public void deleteUser(String userId) {
        if (repo.existsById(userId)) {
            repo.deleteById(userId);
        } else {
            throw new RuntimeException("Please check the Registration User ID... No Such User to Delete!");
        }
    }

    @Override
    public void updateUser(RegisteredUserDTO userDTO) {
        if (repo.existsById(userDTO.getRegUserId())) {
            repo.save(mapper.map(userDTO, RegisteredUser.class));
        } else {
            throw new RuntimeException("Please check the Registration User ID... No Such User to Update!");
        }
    }

    @Override
    public List<RegisteredUserDTO> getAllUsers() {
        return mapper.map(repo.findAll(), new TypeToken<List<RegisteredUserDTO>>() {
        }.getType());
    }

    @Override
    public long countUsers() {
        return repo.count();
    }

    @Override
    public void saveCustomerWithImg(String customer, MultipartFile file) {
        RegisteredUserDTO userDTO = null;
        String path = null;
        try {
            userDTO = objectMapper.readValue(customer, RegisteredUserDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        if (!repo.existsById(userDTO.getRegUserId())){
            try {
                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadDir = new File(projectPath + "/uploads");
                uploadDir.mkdir();
                file.transferTo(new File(uploadDir.getAbsolutePath()+"/"+userDTO.getRegUserId()+"_"+file.getOriginalFilename()));
                path="uploads/"+userDTO.getRegUserId()+"_"+file.getOriginalFilename();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            CustomerVerificationImgDTO imgDTO = new CustomerVerificationImgDTO();
            imgDTO.setPath(path);
            ArrayList<CustomerVerificationImgDTO> arrayList = new ArrayList<>();
            arrayList.add(imgDTO);
            System.out.println(imgDTO.getPath());
            userDTO.setImgs(arrayList);
            repo.save(mapper.map(userDTO,RegisteredUser.class));
        }else {
            throw new RuntimeException("Customer Already Exist");
        }
    }

    @Override
    public String generateCustomerId() {
        long count = repo.count();
        String id = "C00-000";

        if (count != 0) {
            String generateCustomerId = repo.generateCustomerId();
            int tempId = Integer.parseInt(generateCustomerId.split("-")[1]);
            tempId += 1;
            if (tempId < 10) {
                id = "C00-00" + tempId;
            } else if (tempId < 100) {
                id = "C00-0" + tempId;
            } else if (tempId < 1000) {
                id = "C00-" + tempId;
            }
        } else {
            id = "C00-000";
        }
        return id;
    }
}
