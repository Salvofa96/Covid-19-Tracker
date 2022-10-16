package com.example.Covid19Tracker.repository;

import com.example.Covid19Tracker.model.ReportRegionale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ReportRegionaleRepository extends JpaRepository<ReportRegionale,Integer> {
    @Query(value = "Select denominazione_regione, deceduti from coviddb.report_regionale where data=CURDATE() - INTERVAL 1 DAY", nativeQuery = true)
    public List<String> trovaRegionieMorti();

    @Query(value="Select denominazione_regione,deceduti from coviddb.report_regionale where deceduti= (Select max(deceduti) from coviddb.regioni)  ",nativeQuery = true)
    public List<String> trovaMaxMorti();

    @Query(value="Select denominazione_regione,deceduti from coviddb.report_regionale where deceduti= (Select min(deceduti) from coviddb.regioni)  ",nativeQuery = true)
    public List<String> trovaMinMorti();
    @Transactional
    @Modifying
    @Query(value="truncate table report_regionale",nativeQuery = true)
    public void update();




}
