import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { Game } from '../data/game';
import { Player } from '../data/player';
import { PlayersService } from '../service/players.service';
import { GamesService } from '../service/games.service';
import { Gamesession } from '../data/gamesession';
import { Participation } from '../data/participation';
import { DeltakelseComponent } from '../partials/deltakelse/deltakelse.component';
import { UserinfoComponent } from '../userinfo.component';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-editgamesession',
  templateUrl: './editgamesession.component.html',
  styleUrls: ['./editgamesession.component.css']
})


export class EditgamesessionComponent implements OnInit {
    id:Number;
    game:Game;
    spillere:Player[];
    gamesession:Gamesession;
    initDate:String;

    
  constructor(private _playerservice: PlayersService, private _gameservice: GamesService, private _Activatedroute:ActivatedRoute) { 
        this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
        let gameID = this._Activatedroute.snapshot.paramMap.get("game");    
        
        this.init_edit(gameID,_playerservice,_gameservice);
  }
  
  init_edit(gameID:string,_playerservice:PlayersService,_gameservice:GamesService){
      forkJoin(
        _playerservice.getPlayerList(),
        _gameservice.getGame(gameID)
      ).subscribe(res => this.construct_edit(res));
  }
  
  construct_edit(data){
      this.spillere = data[0];
      this.game = data[1];
      let gamersession = <Gamesession>{id:null,dato:this.getTodaysDate(),scenarioID:null,competitors:0,spillet:this.game.id,deltakelser:null};
      gamersession.deltakelser = new Array<Participation>();
      for(let x = 0;x < this.game.antall;x++){
        gamersession.deltakelser.push(<Participation>{ id:null,spiller:0,fraksjonId:0,poeng:(10 - x),posisjon:(x + 1) });
      }
      this.gamesession = gamersession;
  }
  
  getTodaysDate(){
        let datePipe: DatePipe = new DatePipe('en-US');
        let date = new Date();
        return datePipe.transform(date, 'MM/dd/yyyy');
  }
  
  sortByPosition(type:Number){
    if(type == Number(1)){
        for(let a = 0;a < this.gamesession.deltakelser.length;a++){
            let positionToEdit:Number = Number(a) + Number(1);           
            this.gamesession.deltakelser[a].posisjon = Number(positionToEdit);
        }
    }else{
        for(let a = 0;a < this.gamesession.deltakelser.length;a++){
            let positionToEdit:Number = Number(a) + Number(1);           
            this.gamesession.deltakelser[a].posisjon = Number(positionToEdit);
        }
        
    }
  }
  
  correctEqualsScore(){
     
      let participationLength:number = this.gamesession.deltakelser.length;
      for(let v = 0;v < participationLength;++v){
         this.gamesession.deltakelser[v].posisjon = Number(v) + Number(1); 
      }
      
      let formerScore:Number = 0;
      let lastPosition:Number = Number(participationLength - 1);
      let dragWithPosition:Number = Number(participationLength - 1);
      for(let v = participationLength - 1;v >= 0;v--){
          let scoreAtV = this.gamesession.deltakelser[v].poeng;
          if(this.isNumber(scoreAtV)){
              if(this.isNumber(formerScore) && formerScore == scoreAtV){
                  this.gamesession.deltakelser[v].posisjon = dragWithPosition;
              }else{
                  dragWithPosition = this.gamesession.deltakelser[v].posisjon;
              }
              formerScore = scoreAtV;
          }
      }
      
      
  }
  
  isNumber(n:any): boolean {
            return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }
  
  sortByPoints(){
    this.gamesession.deltakelser = this.gamesession.deltakelser.sort((n1,n2) => {
    if (Number(n1.poeng) > Number(n2.poeng)) {
        return -1;
    }

    if (Number(n1.poeng) < Number(n2.poeng)) {
        return 1;
    }

    return 0;
  });
  
  this.correctEqualsScore();
      
  }
  
  drop(event: CdkDragDrop<string[]>) {
    this.correctForDrag(event);
    moveItemInArray(this.gamesession.deltakelser, event.previousIndex, event.currentIndex);
  }
  
  correctForDrag(event: CdkDragDrop<string[]>){
         
    if(event.currentIndex < event.previousIndex){
        this.gamesession.deltakelser[event.previousIndex].posisjon = Number(this.gamesession.deltakelser[event.currentIndex].posisjon) - Number(1);
        for(let a = (event.currentIndex);a < this.gamesession.deltakelser.length;a++){
            let positionToEdit:Number = Number(this.gamesession.deltakelser[a].posisjon) + Number(1);
            if(!Number.isNaN(positionToEdit)){               
                this.gamesession.deltakelser[a].posisjon = Number(positionToEdit);
            }
        }
    }else{
        this.gamesession.deltakelser[event.previousIndex].posisjon = Number(this.gamesession.deltakelser[event.currentIndex].posisjon) + Number(1);
        for(let a = 0;a <= event.currentIndex;a++){
            let positionToEdit:Number = this.gamesession.deltakelser[a].posisjon;
            if(!Number.isNaN(positionToEdit) && positionToEdit >= 2){
                this.gamesession.deltakelser[a].posisjon = (Number(positionToEdit) - Number(1));
            }
        }
    }   
   }
  
  post(){
    let deltakelser = Array<Participation>();
    this.gamesession.deltakelser.forEach(function(value){
        if(value.spiller && value.spiller != null && value.spiller != 0){
            deltakelser.push(value);
        }
    });
    this.gamesession.deltakelser = deltakelser;
    this.gamesession.competitors = deltakelser.length;
    this.gamesession.dato = this.initDate;
    this._gameservice.postGamesession(this.gamesession, this);
  }
  
  assignNewID(data){
    console.log(data);
  }



  ngOnInit(): void {
      this.initDate = this.getTodaysDate();
  }

}
