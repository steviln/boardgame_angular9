import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';
import { PlayerResult } from '../data/playerresult';
import { UserinfoComponent } from '../userinfo.component';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {
  players: Array<PlayerResult>;
  loginStatus:Boolean;
  userID:Number;
  status:Number;


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
  constructor(private _playerservice: PlayersService) { 
        _playerservice.getPlayerList().subscribe(data => this.assignPlayers(data) );  
  }
  
  assignPlayers(data){
      this.players = data;
  }

}
