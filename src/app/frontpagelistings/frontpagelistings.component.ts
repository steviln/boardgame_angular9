import { Component, OnInit } from '@angular/core';
import { FrontpageplayersService } from '../service/frontpageplayers.service';
import { FrontpagePlayerResult } from '../data/frontpageplayerresult';
import { FrontpageGamelistResult } from '../data/frontpagegamelistresult';

@Component({
  selector: 'app-frontpagelistings',
  templateUrl: './frontpagelistings.component.html',
  styleUrls: ['./frontpagelistings.component.css'],
  providers: [FrontpageplayersService]
})
export class FrontpagelistingsComponent implements OnInit {
  players: Array<FrontpagePlayerResult>;
  games : Array<FrontpageGamelistResult>;

  constructor(private _playerrankservice: FrontpageplayersService) { 
        _playerrankservice.getFrontpageGameData().subscribe(data => this.assignFrontpageGames(data) );
        _playerrankservice.getFrontpagePlayerData().subscribe(data => this.assignPlayerRanking(data) );     
  }
  
  assignPlayerRanking(data){
      this.players = data;
  }
  
  assignFrontpageGames(data){
      this.games = data;
  }

  ngOnInit(): void {
  }

}
