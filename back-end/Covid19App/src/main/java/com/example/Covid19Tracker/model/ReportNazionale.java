package com.example.Covid19Tracker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReportNazionale{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @DateTimeFormat(pattern="yyyy/MM/dd")
    @Column
    public Date data;
    @Column
    public String stato;
    @Column
    public int ricoverati_con_sintomi;
    @Column
    public int terapia_intensiva;
    @Column
    public int totale_ospedalizzati;
    @Column
    public int isolamento_domiciliare;
    @Column
    public int totale_positivi;
    @Column
    public int variazione_totale_positivi;
    @Column
    public int nuovi_positivi;
    @Column
    public int dimessi_guariti;
    @Column
    public int deceduti;
    @Column
    public double casi_da_sospetto_diagnostico;
    @Column
    public double casi_da_screening;
    @Column
    public int totale_casi;
    @Column
    public int tamponi;
    @Column
    public double casi_testati;
    @Column
    public String note;
    @Column
    public double ingressi_terapia_intensiva;
    @Column
    public String note_test;
    @Column
    public String note_casi;
    @Column
    public double totale_positivi_test_molecolare;
    @Column
    public double totale_positivi_test_antigenico_rapido;
    @Column
    public double tamponi_test_molecolare;
    @Column
    public double tamponi_test_antigenico_rapido;


    public ReportNazionale(){}
}
