import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../service/players.service';
import { Player } from '../data/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    id: Number;
    player: Player;

  constructor(private _Activatedroute:ActivatedRoute, private _playerservice: PlayersService) { 
     this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
     _playerservice.getPlayer(this.id.toString()).subscribe(data => this.assignPlayer(data) ); 
  }
  

  
  assignPlayer(data){
      this.player = data;
  }

  ngOnInit(): void {
  }

}
