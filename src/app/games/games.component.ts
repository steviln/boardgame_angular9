import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';
import { GamesResult } from '../data/gamesresult';
import { Game } from '../data/game';
import { UserinfoComponent } from '../userinfo.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})
export class GamesComponent implements OnInit {
  games: Array<GamesResult>;
  game: Game;
  gameservice:GamesService;
  loginStatus:Boolean;
  userID:Number;
  status:Number;
  errorMessage:String;


  constructor(private _gameservice: GamesService) { 
        this.game = null;
        this.gameservice =_gameservice;
        this.gameservice.getGames().subscribe(data => this.assignGames(data) );  
  }
  
  assignGames(data){
      this.games = data;
  }
  
  assignGame(data){
    this.game = data;  
  }
  
  loadGame(gameID:String){
      this.gameservice.getGame(gameID.toString()).subscribe(data => this.assignGame(data) );
  }

  ngOnInit(): void {
    this.determineLoginStatus();
  }
  
  determineLoginStatus(): void {
      
    if(UserinfoComponent.logged){
        this.loginStatus = false;
        this.userID = UserinfoComponent.userID;
        this.status = UserinfoComponent.status;
    }else{
        this.loginStatus = true; 
        this.userID = 0;
        this.status = 0;       
    }
  }

}
