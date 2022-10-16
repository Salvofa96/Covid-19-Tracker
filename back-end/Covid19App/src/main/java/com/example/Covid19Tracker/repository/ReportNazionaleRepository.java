package com.example.Covid19Tracker.repository;
import com.example.Covid19Tracker.model.ReportNazionale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ReportNazionaleRepository extends JpaRepository<ReportNazionale,Integer> {
    @Query(value="Select data,deceduti from coviddb.report_nazionale where deceduti= (Select max(deceduti) from coviddb.state)  ",nativeQuery = true)
    public List<String> trovaMaxMorti();

    @Query(value="Select data,deceduti from coviddb.report_nazionale where deceduti= (Select min(deceduti) from coviddb.state)  ",nativeQuery = true)
    public List<String> trovaMinMorti();

    @Transactional
    @Modifying
    @Query(value="truncate table report_nazionale",nativeQuery = true)
    public void update();

    @Query(value="Select Max(id) from coviddb.report_nazionale ",nativeQuery = true)
    public int ultimoReportNazionale();


}
