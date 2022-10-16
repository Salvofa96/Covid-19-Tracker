package com.example.Covid19Tracker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Data
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class CentriVaccinali {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id")
        public int id;
        @Column
        public String area;
        @Column
        public String provincia;
        @Column
        public String comune;
        @Column
        public String presidio_ospedaliero;
        @Column
        public String N1;
        @Column
        public String N2;
        @Column
        public int ISTAT;
        @Column
        public String reg;




}
