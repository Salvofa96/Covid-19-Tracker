package com.example.Covid19Tracker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import java.util.Date;
@Entity
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReportRegionale {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id")
        private int id;
        @Column
        @DateTimeFormat(pattern="yyyy/MM/dd")
        public Date data;
        @Column
        public String stato;
        @Column
        public int codice_regione;
        @Column
        public String denominazione_regione;
        @Column
        public double lat;
        @JsonProperty("long")
        @Column
        public double mylong;
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
        public String casi_da_sospetto_diagnostico;
        @Column
        public String casi_da_screening;
        @Column
        public int totale_casi;
        @Column
        public int tamponi;
        @Column
        public int casi_testati;
        @Column
        public String note;
        @Column
        public int ingressi_terapia_intensiva;
        @Column
        public String note_test;
        //@Column(length = 3000)
        //public String note_casi;
        @Column
        public int totale_positivi_test_molecolare;
        @Column
        public int totale_positivi_test_antigenico_rapido;
        @Column
        public int tamponi_test_molecolare;
        @Column
        public int tamponi_test_antigenico_rapido;
        @Column
        public String codice_nuts_1;
        @Column
        public String codice_nuts_2;



}
