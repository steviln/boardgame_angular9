import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Participation } from '../../data/participation';
import { Game } from '../../data/game';
import { Player } from '../../data/player';

@Component({
  selector: 'app-deltakelse',
  templateUrl: './deltakelse.component.html',
  styleUrls: ['./deltakelse.component.css']
})
export class DeltakelseComponent implements OnInit, OnChanges {
    @Input() game:Game;
    @Input() spillere:Player[];
    @Input() poeng:Number;
    @Input() posisjon:Number;
    @Input() spiller:Number;
    @Input() fraksjonId:Number;
    @Input() delta:Participation;
    
    @Output() objectChange = new EventEmitter();

    constructor() { 
    
    }

    ngOnInit(): void {
        //this.spiller.detectChanges();
    }
    
    ngOnChanges(changes: SimpleChanges) {
        //Object.entries(changes).forEach(
        //    ([key, value]) => this.sendChange(key,value.currentValue)
        //);      
    }
    
    sendChange(prop:String,value:String){
        //this.objectChange.emit(value);
    }
    

    
    

}
