package com.example.Covid19Tracker.controller;

import com.example.Covid19Tracker.model.ReportNazionale;
import com.example.Covid19Tracker.service.ReportNazionaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class ReportNazionaleResource {
    @Autowired
    ReportNazionaleService reportNazionaleService;


    @PostMapping("/load")
    public void load() throws Exception {
        reportNazionaleService.loadToDb();
    }

    @GetMapping("/stati")
    @ResponseStatus(HttpStatus.OK)
    public List<ReportNazionale> stati(){
        return reportNazionaleService.stati();
    }

    @GetMapping("/ultimoReport")
    @ResponseStatus(HttpStatus.OK)
    public ReportNazionale ultimoReportNazionale(){
        return reportNazionaleService.ultimoReportNazionale();
    }

    @GetMapping("/maxMorti")
    public  List<String> maxMorti(){
        return reportNazionaleService.morti();
    }

    @PutMapping("/updateStato")
    public List<ReportNazionale> update() throws Exception {
        return reportNazionaleService.update();
    }

    @GetMapping("/trovaMinMortiPerStato")
    public List<String> trovaMinMorti(){
        return reportNazionaleService.minMorti();
    }

}
