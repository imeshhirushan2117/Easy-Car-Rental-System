package com.esaycarrental.spring.service.Impl;

import com.esaycarrental.spring.dto.RatesDTO;
import com.esaycarrental.spring.entity.Rates;
import com.esaycarrental.spring.repo.RatesRepo;
import com.esaycarrental.spring.service.RatesService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class RatesServiceImpl implements RatesService {

    @Autowired
    private RatesRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveRates(RatesDTO ratesDTO) {
        if (!repo.existsById(ratesDTO.getRateId())) {
            repo.save(mapper.map(ratesDTO, Rates.class));
        } else {
            throw new RuntimeException("Rate Already Exist");
        }
    }

    @Override
    public void deleteRates(String rateID) {
        if (repo.existsById(rateID)) {
            repo.deleteById(rateID);
        } else {
            throw new RuntimeException("Please check the Rate ID... No Such Rate to Delete!");
        }
    }

    @Override
    public void updateRates(RatesDTO ratesDTO) {
        if (repo.existsById(ratesDTO.getRateId())) {
            repo.save(mapper.map(ratesDTO, Rates.class));
        } else {
            throw new RuntimeException("Please check the Rate ID... No Such Rate to Update!");
        }
    }

    @Override
    public List<RatesDTO> getAllRates() {
        return mapper.map(repo.findAll(), new TypeToken<List<RatesDTO>>() {
        }.getType());

    }

    @Override
    public String generateRatesId() {
        long count = repo.count();
        String id = "R00-000";

        if (count != 0) {
            String generateRatesId = repo.generateRatesId();
            int tempId = Integer.parseInt(generateRatesId.split("-")[1]);
            tempId += 1;
            if (tempId < 10) {
                id = "R00-00" + tempId;
            } else if (tempId < 100) {
                id = "R00-0" + tempId;
            } else if (tempId < 1000) {
                id = "R00-" + tempId;
            }
        } else {
            id = "R00-000";
        }
        return id;
    }
}
