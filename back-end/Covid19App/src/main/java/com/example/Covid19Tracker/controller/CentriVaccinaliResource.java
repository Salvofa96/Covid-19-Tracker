package com.example.Covid19Tracker.controller;

import com.example.Covid19Tracker.model.CentriVaccinali;
import com.example.Covid19Tracker.service.CentriVaccinaliService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CentriVaccinaliResource {
    @Autowired
    CentriVaccinaliService service;

    @PostMapping("/loadcentri")
    public void load() throws Exception {
        service.loadToDb();
    }

    @GetMapping("/allCentri")
    public List<CentriVaccinali> getall(){
        return service.centriVaccinali();
    }

    @GetMapping("/allCentriDistinct")
    public List<String> getallDistinct(){
        return service.centriVaccinaliD();
    }

    @GetMapping("/forReg/{reg}")
    public List<String> forReg(@PathVariable String reg){
        return service.centriVaccinaliforReg(reg);
    }

    @GetMapping("/forProv/{provincia}")
    public List<CentriVaccinali> dettagliPerProvincia(@PathVariable String provincia) {
        return service.centriVaccinaliforProv(provincia);
    }
}
