import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../data/login';
import { LoginComponent } from '../login/login.component';
import { UserinfoComponent } from '../userinfo.component';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
    
  baseUrl = environment.baseUrl;   

  constructor(private _http: HttpClient) { }
 
  
  postEditPlayer(player:Login,login:LoginComponent){
      this._http.post<Login>(this.baseUrl + "/login/login",player).subscribe(data => login.checkLogin(data) ); 
  }
  
  init(){
      
    return new Promise<void>((resolve, reject) => {
            console.log("AppInitService.init() called");
            this._http.get(this.baseUrl + "/login/init").subscribe(data => { this.refreshSessionData(data); resolve(); } ); 
    });
          
  }
  
  refreshSessionData(data){
      console.log(data);
      UserinfoComponent.userID = data.userID;
      if(data.userID && data.userID > 0){
        UserinfoComponent.logged = true;
      }
      UserinfoComponent.status = data.status;     
  }
  

  
}
