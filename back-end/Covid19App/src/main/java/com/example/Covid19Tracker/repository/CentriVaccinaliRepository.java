package com.example.Covid19Tracker.repository;

import com.example.Covid19Tracker.model.CentriVaccinali;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CentriVaccinaliRepository extends JpaRepository<CentriVaccinali, Integer> {
    @Query(value="Select distinct (c.provincia)  from coviddb.centri_vaccinali as c where reg=:reg ",nativeQuery = true)
    public List<String> groupByReg(@Param("reg") String reg);

    @Query(value="Select distinct (reg) from coviddb.centri_vaccinali order by reg ASC ",nativeQuery = true)
    public List<String> getAllRegD();

    @Query(value="Select * from coviddb.centri_vaccinali where provincia=:provincia ",nativeQuery = true)
    public List<CentriVaccinali> provinciaDettagli(@Param("provincia") String provincia);
}
