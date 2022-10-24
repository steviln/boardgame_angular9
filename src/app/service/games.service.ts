import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GamesResult } from '../data/gamesresult';
import { Game } from '../data/game';
import { Gamesession } from '../data/gamesession';
import { CompanyResult } from '../data/companyresult';
import { Company } from '../data/company';
import { EditgameComponent } from '../editgame/editgame.component';
import { EditgamesessionComponent } from '../editgamesession/editgamesession.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompleteGameData } from '../data/completegamedata';
import { SingleGamesession } from '../data/singlegamesession';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

   baseUrl = environment.baseUrl; 
   
   constructor(private _http: HttpClient) { }
  
   getGames():Observable<GamesResult[]>{
      return this._http.get<GamesResult[]>(this.baseUrl + "/game/games");  
   }
   
   getGame(id: string):Observable<Game>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Game>(this.baseUrl + "/game/game?id=" + id,{ params: parameter });
   }
   
   getCompleteGame(id: string):Observable<CompleteGameData>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<CompleteGameData>(this.baseUrl + "/gamesession/factionrankings?id=" + id,{ params: parameter });
   }
   
   postGame(game:Game,editgame:EditgameComponent){
      this._http.post<Game>(this.baseUrl + "/game/game",game).subscribe(data => editgame.assignNewID(data) ); ;
   }
   
   postGamesession(gamesession:Gamesession,editgamesession:EditgamesessionComponent){
      this._http.post<Game>(this.baseUrl + "/gamesession/gamesession",gamesession).subscribe(data => editgamesession.assignNewID(data) ); ;
   }
   
   getGamesession(id: string): Observable<Gamesession>{
      return this._http.get<Gamesession>(this.baseUrl + "/gamesession/gamesession?id=" + id);
   }
   
   getCompleteGamesession(id: String): Observable<SingleGamesession>{
      return this._http.get<SingleGamesession>(this.baseUrl + "/gamesession/displaygamesession?id=" + id);
   }
   
   getCompanies():Observable<Company[]>{
      return this._http.get<Company[]>(this.baseUrl + "/company/selskaplist");  
   }
   
   postCompany(selskap:Company,editcompany:CompaniesComponent){
      this._http.post<Company>(this.baseUrl + "/company/selskaplist",selskap).subscribe(data => editcompany.assignCompaniesAfter(data));  
   }
   
   getGamesessionList(id: string):Observable<Gamesession[]>{
      return this._http.get<Gamesession[]>(this.baseUrl + "/gamesession/gamesessionsforgame?id=" + id);  
   }
   
   
   

  
}
