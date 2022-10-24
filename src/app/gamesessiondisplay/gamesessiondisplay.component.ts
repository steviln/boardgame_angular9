import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../service/games.service';
import { SingleGamesession } from '../data/singlegamesession';

@Component({
  selector: 'app-gamesessiondisplay',
  templateUrl: './gamesessiondisplay.component.html',
  styleUrls: ['./gamesessiondisplay.component.css']
})
export class GamesessiondisplayComponent implements OnInit {
    private id:String;
    gamesession:SingleGamesession;
    ready:Boolean = false;

  constructor(private _gameservice: GamesService, private _Activatedroute:ActivatedRoute) { 
       this.id = this._Activatedroute.snapshot.paramMap.get("id");
       _gameservice.getCompleteGamesession(this.id).subscribe(data => this.applyData(data));
  }
  
  applyData(data:SingleGamesession):void{
      console.log(data);
      this.gamesession = data;
      this.ready = true;
      }

  ngOnInit(): void {
  }

}
