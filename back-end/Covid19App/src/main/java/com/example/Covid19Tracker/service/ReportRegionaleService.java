package com.example.Covid19Tracker.service;

import com.example.Covid19Tracker.model.ReportRegionale;
import com.example.Covid19Tracker.repository.ReportRegionaleRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class ReportRegionaleService {
    @Autowired
    private ReportRegionaleRepository repo;

    public static List<ReportRegionale> readJsonFromUrlRegioni() throws IOException, RuntimeException, JSONException {
        String sURL = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";
        InputStream is = new URL(sURL).openStream();
        ObjectMapper mapper = new ObjectMapper();
        List<ReportRegionale> reportRegionale = mapper.readValue(is, new TypeReference<List<ReportRegionale>>() {
        });
        return reportRegionale;
    }

    public void loadToDb() throws Exception {
        List<ReportRegionale> y = readJsonFromUrlRegioni();
        Iterator<ReportRegionale> iterator=y.iterator();
        while (iterator.hasNext()) {
            repo.save(iterator.next());
        }
    }

    public List<ReportRegionale> findallReg(){
        return repo.findAll();
    }

    public Optional<ReportRegionale> find(int id){
        return repo.findById(id);
    }

    public List<String> trovamortiPerReg(){
        return repo.trovaRegionieMorti();
    }

    public List<String> maxMorti(){
        return repo.trovaMaxMorti();

    }

    public List<String> minMorti(){
        return repo.trovaMinMorti();

    }

    public List<ReportRegionale> update() throws Exception {
        repo.update();
        loadToDb();
        return repo.findAll();
    }
}
