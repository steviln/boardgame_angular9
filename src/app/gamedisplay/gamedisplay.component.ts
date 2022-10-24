import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';
import { CompleteGameData } from '../data/completegamedata';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo.component';
import { Gamesession } from '../data/gamesession';


@Component({
  selector: 'app-gamedisplay',
  templateUrl: './gamedisplay.component.html',
  styleUrls: ['./gamedisplay.component.css']
})
export class GamedisplayComponent implements OnInit {
  gamedata: CompleteGameData;
  id: Number;
  loginStatus:Boolean;
  status:Number;
  sessions:Gamesession[];

  constructor(private _gameservice: GamesService, private _Activatedroute:ActivatedRoute) { 
      this.gamedata = null; 
      this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
      _gameservice.getCompleteGame(this.id.toString()).subscribe(data => this.assignCompleteGameData(data) ); ; 
  }

  ngOnInit(): void {
    this.determineLoginStatus();
  }
  
  determineLoginStatus(): void {
      
    if(UserinfoComponent.logged){
        this.loginStatus = false;
        this.status = UserinfoComponent.status;
    }else{
        this.loginStatus = true; 
        this.status = 0;       
    }
  }
  
  listSessions(data:Gamesession[]):void{
      console.log(data);
      this.sessions = data;
  }
  
  displayRegistrarName(objekt:any) : string{
        if(objekt === undefined || objekt === null){
            return "";
        }else{
            return "registrert av " + objekt.fornavn + " " + objekt.etternavn;
        }
      }
  
  assignCompleteGameData(data:CompleteGameData){
        this.gamedata = data;
        this._gameservice.getGamesessionList(this.id.toString()).subscribe(data => this.listSessions(data));
        //console.log(data);
  }

}
