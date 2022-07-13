import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../service/players.service';
import { Player } from '../data/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
    id: Number;
    player: Player;
    passorden: String;
    passordto: String;
    buttonText: String;
    playerservice;

  constructor(private _Activatedroute:ActivatedRoute, private _playerservice: PlayersService, private router: Router) {
     this.player = {id:null,brukernavn:"",fornavn:"",etternavn:"",epost:"",passord:"",rettighet:0,overlook:0}; 
     this.id = Number(this._Activatedroute.snapshot.paramMap.get("id"));
     this.playerservice = _playerservice;
     this.passorden = "";
     this.passordto = "";
     if(this.id == 0){
         this.buttonText = "Ny";
     }else{
         this.buttonText = "Rediger";
         this.playerservice.getEditPlayer(this.id.toString()).subscribe(data => this.assignPlayer(data) ); 
     }
  }
   
  assignPlayer(data){
      this.player = data;
  }
  
  assignNewID(data){
    //this.id = data.id;
    //this.player.id = this.id;
    this.router.navigate(['spillere']);
  }
  
  post(){
      if(this.passorden === this.passordto && this.passorden.trim().length > 0){
          this.player.passord = this.passorden;
      }else{
          this.player.passord = "";
      }
      this.playerservice.postEditPlayer(this.player,this);
  }


  ngOnInit(): void {
  }

}