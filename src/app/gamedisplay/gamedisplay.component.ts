import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';
import { CompleteGameData } from '../data/completegamedata';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo.component';


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
  
  assignCompleteGameData(data:CompleteGameData){
        this.gamedata = data;
        //console.log(data);
  }

}
