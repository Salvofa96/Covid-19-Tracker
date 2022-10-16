package com.example.Covid19Tracker.service;
import com.example.Covid19Tracker.repository.ReportNazionaleRepository;
import com.example.Covid19Tracker.model.ReportNazionale;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.*;

@org.springframework.stereotype.Service
public class ReportNazionaleService {
    @Autowired
    private ReportNazionaleRepository repo;

    public static List<ReportNazionale> readJsonFromUrlState() throws IOException, RuntimeException, JSONException {
        String sURL = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"; //just a string
        InputStream is = new URL(sURL).openStream();
        ObjectMapper mapper = new ObjectMapper();
        List<ReportNazionale> stati = mapper.readValue(is, new TypeReference<List<ReportNazionale>>() {
        });
        return stati;
    }
    public void loadToDb() throws Exception {
        List<ReportNazionale> y = readJsonFromUrlState();
        Iterator<ReportNazionale> iterator=y.iterator();
        while (iterator.hasNext()) {
            repo.save(iterator.next());
        }
    }

    public List<ReportNazionale> stati(){
        return repo.findAll();
    }

    public List<String> morti() {return repo.trovaMaxMorti();}

    public List<ReportNazionale> update() throws Exception {
        repo.update();
        loadToDb();
        return repo.findAll();
    }

    public List<String> minMorti(){
        return repo.trovaMinMorti();

    }

    public ReportNazionale ultimoReportNazionale(){

        int id= repo.ultimoReportNazionale();
        ReportNazionale reportNazionale =repo.findById(id).orElseThrow();
        return reportNazionale;
    }

}
