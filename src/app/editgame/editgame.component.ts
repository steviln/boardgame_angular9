import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../data/game';
import { Faction } from '../data/faction';
import { GamesService } from '../service/games.service';
import { CompanyResult } from '../data/companyresult';
import { Company } from '../data/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {
   id: Number;
   gameservice: GamesService;
   buttonText: String;
   game: Game;
   companies: Array<Company>;
   errorMessage:String;

   constructor(private _Activatedroute:ActivatedRoute, private _gameservice: GamesService, private router: Router) {
        this.game = {id:null,navn:"",antall:0,fraksjoner:[],scenarios:[],selskap:null}; 
        this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
        this.gameservice = _gameservice;
        this.gameservice.getCompanies().subscribe(data => this.assignCompanies(data) ); 

        if(this.id == 0){
            this.buttonText = "Ny";            
        }else{
            this.buttonText = "Rediger";
            this.gameservice.getGame(this.id.toString()).subscribe(data => this.assignGame(data) ); 
        }
   }
   
   assignCompanies(compani:Array<Company>){
       compani.unshift({id:null,navn:"Ikke valgt"});
       this.companies = compani;
   }
   
   assignGame(data){
        this.game = data;
   }

   ngOnInit(): void {
       
   }
   
   post(){
      if(this.id === 0){
         this.game.id = null; 
      }
      //console.log(this.game);
      this.gameservice.postGame(this.game,this);
   }
   
   leggTilFraksjon(){
       this.game.fraksjoner.push({id:null,navn:"",spillID:null});
    }
    
    popFaction(fraksjon:Faction){
        const index: number = this.game.fraksjoner.indexOf(fraksjon);
        if (index !== -1) {
            this.game.fraksjoner.splice(index, 1);
        }  
    }
    
    leggTilScenario(){
       this.game.scenarios.push({id:null,navn:"",spillid:null});
    }

    
    assignNewID(data){
        //this.id = data.id;
        //this.game = data;
        this.router.navigate(['games']);
    }
    
    

}
