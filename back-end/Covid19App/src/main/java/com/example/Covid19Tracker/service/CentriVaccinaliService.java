package com.example.Covid19Tracker.service;

import com.example.Covid19Tracker.model.CentriVaccinali;
import com.example.Covid19Tracker.repository.CentriVaccinaliRepository;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Iterator;
import java.util.List;

@Service
public class CentriVaccinaliService {
    @Autowired
    private CentriVaccinaliRepository repo;

    public static List<CentriVaccinali> readJsonFromUrlCentriVac() throws IOException, RuntimeException, JSONException {
        String sURL = "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/punti-somministrazione-latest.json"; //just a string
        RestTemplate restTemplate = new RestTemplate();
        String json = restTemplate.getForObject(sURL, String.class);
        JSONTokener tokener = new JSONTokener(json);
        JSONArray obj = new JSONObject(tokener).getJSONArray("data");
        Type listType = new TypeToken<List<CentriVaccinali>>() {
        }.getType();
        List<CentriVaccinali> centri = new Gson().fromJson(String.valueOf(obj), listType);
        return centri;
    }

    public void loadToDb() throws Exception {
        List<CentriVaccinali> y = readJsonFromUrlCentriVac();
        Iterator<CentriVaccinali> iterator=y.iterator();
        while (iterator.hasNext()) {
            repo.save(iterator.next());
        }
    }

    public List<CentriVaccinali> centriVaccinali(){
        return repo.findAll();
    }

    public List<String> centriVaccinaliD(){
        return repo.getAllRegD();
    }
    public List<String> centriVaccinaliforReg(String reg){
        return repo.groupByReg(reg);
    }

    public List<CentriVaccinali> centriVaccinaliforProv(String provincia){
        return repo.provinciaDettagli(provincia);

    }


}
