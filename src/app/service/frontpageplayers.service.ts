import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrontpageGamelistResult } from '../data/frontpagegamelistresult';
import { FrontpagePlayerResult } from '../data/frontpageplayerresult';

@Injectable({
  providedIn: 'root'
})
export class FrontpageplayersService {

  constructor(private _http: HttpClient) { }
  
  getFrontpagePlayerData():Observable<FrontpagePlayerResult[]>{
      return this._http.get<FrontpagePlayerResult[]>("http://localhost:8080/rest/frontpageplayerlist");      
   }
   
   getFrontpageGameData():Observable<FrontpageGamelistResult[]>{
      return this._http.get<FrontpageGamelistResult[]>("http://localhost:8080/rest/gameslist");  
   }
  
  
}
