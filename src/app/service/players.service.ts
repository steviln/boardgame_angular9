import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlayerResult } from '../data/playerresult';
import { Player } from '../data/player';
import { EditplayerComponent } from '../editplayer/editplayer.component';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private _http: HttpClient) { }
  
  getPlayerList():Observable<PlayerResult[]>{
      return this._http.get<PlayerResult[]>("http://localhost:8080/rest/limitedplayerlist");  
  }
  
  getPlayer(id: string):Observable<Player>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Player>("http://localhost:8080/rest/player?id=" + id,{ params: parameter });
  }
  
    getEditPlayer(id: string):Observable<Player>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Player>("http://localhost:8080/rest/editplayer?id=" + id,{ params: parameter });
  }
  
    
  postEditPlayer(player:Player,editplayer:EditplayerComponent){
      this._http.post<Player>("http://localhost:8080/rest/editplayer",player).subscribe(data => editplayer.assignNewID(data) ); ;
  }
  
}
