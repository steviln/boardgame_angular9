import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../service/players.service';
import { CompletePlayerData } from '../data/completeplayerdata';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    id: Number;
    player: CompletePlayerData;

  constructor(private _Activatedroute:ActivatedRoute, private _playerservice: PlayersService) { 
     this.player = null;
     this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
     _playerservice.getCompletePlayer(this.id.toString()).subscribe(data => this.assignPlayer(data) ); 
  }
  

  
  assignPlayer(data){
      console.log(data);
      this.player = data;
      console.log(this.player);
  }

  ngOnInit(): void {
  }

}
