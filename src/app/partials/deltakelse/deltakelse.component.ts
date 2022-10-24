import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Participation } from '../../data/participation';
import { Game } from '../../data/game';
import { Player } from '../../data/player';

@Component({
  selector: 'app-deltakelse',
  templateUrl: './deltakelse.component.html',
  styleUrls: ['./deltakelse.component.css']
})
export class DeltakelseComponent implements OnInit, OnChanges{
    @Input() game:Game;
    @Input() spillere:Player[];
    @Input() poeng:Number;
    @Input() posisjon:Number;
    @Input() spiller:Number;
    @Input() fraksjonId:Number;
    @Input() delta:Participation;
    spillerID:Player;
    
    @Output() objectChange = new EventEmitter();

    constructor() { 
       
    }

    ngOnInit(): void {
        //this.spillerID = this.delta.spiller;
    }
    

    
    spillerChanged(){

        this.delta.spiller = this.spillerID.id;
        this.spiller = this.spillerID.id;
    }
    
    
    ngOnChanges(changes: SimpleChanges) {
        
        if(changes["spiller"] && changes["spiller"].firstChange){
            let selectedPlayer = this.spiller;
            let komponent = this;
            this.spillere.forEach(function(value){
                if(value.id == selectedPlayer){
                    komponent.spillerID = value;
                }
            });
        }
    }
    
    
    sendChange(prop:String,value:String){
        //console.log(value);
        //console.log(prop);
        //this.objectChange.emit(value);
    }
    

    
    

}
