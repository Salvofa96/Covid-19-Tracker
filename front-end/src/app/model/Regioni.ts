export interface Regioni{
    id: number;
    
    data : Date;
   
    stato : String;
    
    codice_regione : number;
    
    denominazione_regione : string ;
   
    lat: number;
   
    mylong : number;
    
    terapia_intensiva: number;
  
    totale_ospedalizzati:number;
    
    isolamento_domiciliare:number;
   
    totale_positivi:number;
    
    variazione_totale_positivi:number;
    
    nuovi_positivi:number;
   
    dimessi_guariti:number;
    
    deceduti:number;
  
    casi_da_sospetto_diagnostico:String;
    
    casi_da_screening:String;
    
    totale_casi:number;
    
    tamponi:number;
    
    casi_testati:number;
   
    note:String;
  
    ingressi_terapia_intensiva:number;
    
    note_test:String;
   
    totale_positivi_test_molecolare:number;
   
    totale_positivi_test_antigenico_rapido:number;
    
    tamponi_test_molecolare:number;
   
    tamponi_test_antigenico_rapido:number;
   
    codice_nuts_1:String;
    
    codice_nuts_2:String;
}