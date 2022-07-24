import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrontpageGamelistResult } from '../data/frontpagegamelistresult';
import { FrontpagePlayerResult } from '../data/frontpageplayerresult';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrontpageplayersService {
    
  baseUrl = environment.baseUrl; 

  constructor(private _http: HttpClient) { }
  
  getFrontpagePlayerData():Observable<FrontpagePlayerResult[]>{
      return this._http.get<FrontpagePlayerResult[]>(this.baseUrl + "/frontpageplayerlist");      
   }
   
   getFrontpageGameData():Observable<FrontpageGamelistResult[]>{
      return this._http.get<FrontpageGamelistResult[]>(this.baseUrl + "/gameslist");  
   }
  
  
}
