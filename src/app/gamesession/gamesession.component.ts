import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamesession',
  templateUrl: './gamesession.component.html',
  styleUrls: ['./gamesession.component.css']
})
export class GamesessionComponent implements OnInit {
  private sessionID:Number;

  constructor() { 
    this.sessionID = null;
  }

  ngOnInit(): void {
  }

}
