import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontpageService {
    
  players = [];
  games = [];

  constructor() { }
  
  getFrontpageGames() : Array<{name: string, plays: number }>{
      return this.games;
  }
  
  getFrontpagePlayers() : Array<{name: string, score: number }>{
      return this.players;
  }
  
}
