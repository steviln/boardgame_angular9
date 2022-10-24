import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlayerResult } from '../data/playerresult';
import { Player } from '../data/player';
import { CompletePlayerData } from '../data/completeplayerdata';
import { EditplayerComponent } from '../editplayer/editplayer.component';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
   baseUrl = environment.baseUrl; 
    

  constructor(private _http: HttpClient) { }
  
  getPlayerList():Observable<PlayerResult[]>{
      return this._http.get<PlayerResult[]>(this.baseUrl + "/player/limitedplayerlist");  
  }
  
  getPlayer(id: string):Observable<Player>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Player>(this.baseUrl + "/player/player?id=" + id,{ params: parameter });
  }
  
  getCompletePlayer(id: string):Observable<CompletePlayerData>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<CompletePlayerData>(this.baseUrl + "/player/completeplayer?id=" + id,{ params: parameter });
  }
  
 getEditPlayer(id: string):Observable<Player>{
      let parameter = new HttpParams();
      parameter.set("id",id);
      
      return this._http.get<Player>(this.baseUrl + "/player/editplayer?id=" + id,{ params: parameter });
  }
  
    
  postEditPlayer(player:Player,editplayer:EditplayerComponent){
      this._http.post<Player>(this.baseUrl + "/player/editplayer",player).subscribe(data => editplayer.assignNewID(data) ); ;
  }
  
}
