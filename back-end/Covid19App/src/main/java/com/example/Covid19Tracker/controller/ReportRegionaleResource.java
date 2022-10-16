package com.example.Covid19Tracker.controller;

import com.example.Covid19Tracker.model.ReportRegionale;
import com.example.Covid19Tracker.service.ReportRegionaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReportRegionaleResource {
    @Autowired
    ReportRegionaleService service;

    @PostMapping("/loadregioni")
    public void load() throws Exception {
        service.loadToDb();
    }

    @GetMapping("/allregioni")
    public List<ReportRegionale> findAllReg(){
        return service.findallReg();
    }

    @GetMapping("/{id}")
    public Optional<ReportRegionale> find(@PathVariable("id")int id){
        return service.find(id);
    }

    @GetMapping("/trovaRegeMorti")
    public List<String> trovaRegMorti(){
       return service.trovamortiPerReg();
    }

    @GetMapping("/trovaMaxMortiPerReg")
    public List<String> trovaMaxMorti(){
        return service.maxMorti();
    }

    @GetMapping("/trovaMinMortiPerReg")
    public List<String> trovaMinMorti(){
        return service.minMorti();
    }

    @PutMapping("/updateReg")
    public List<ReportRegionale> update() throws Exception {
        return service.update();
    }

}
