import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GamesResult } from '../data/gamesresult';
import { Game } from '../data/game';
import { Gamesession } from '../data/gamesession';
import { CompanyResult } from '../data/companyresult';
import { Company } from '../data/company';
import { EditgameComponent } from '../editgame/editgame.component';
import { EditgamesessionComponent } from '../editgamesession/editgamesession.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompleteGameData } from '../data/completegamedata';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

   constructor(private _http: HttpClient) { }
  
   getGames():Observable<GamesResult[]>{
      return this._http.get<GamesResult[]>("http://localhost:8080/rest/games");  
   }
   
   getGame(id: string):Observable<Game>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Game>("http://localhost:8080/rest/game?id=" + id,{ params: parameter });
   }
   
   getCompleteGame(id: string):Observable<CompleteGameData>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<CompleteGameData>("http://localhost:8080/rest/factionrankings?id=" + id,{ params: parameter });
   }
   
   postGame(game:Game,editgame:EditgameComponent){
      this._http.post<Game>("http://localhost:8080/rest/game",game).subscribe(data => editgame.assignNewID(data) ); ;
   }
   
   postGamesession(gamesession:Gamesession,editgamesession:EditgamesessionComponent){
      this._http.post<Game>("http://localhost:8080/rest/gamesession",gamesession).subscribe(data => editgamesession.assignNewID(data) ); ;
   }
   
   getCompanies():Observable<Company[]>{
      return this._http.get<Company[]>("http://localhost:8080/rest/selskaplist");  
   }
   
   postCompany(selskap:Company,editcompany:CompaniesComponent){
      this._http.post<Company>("http://localhost:8080/rest/selskaplist",selskap).subscribe(data => editcompany.assignCompaniesAfter(data));  
   }
   
   getGamesessionList():Observable<Company[]>{
      return this._http.get<Company[]>("http://localhost:8080/rest/gamesessionlist");  
   }
   

  
}
