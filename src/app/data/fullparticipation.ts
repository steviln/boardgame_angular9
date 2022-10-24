import { Player } from '../data/player';
import { Faction } from '../data/faction';

export interface FullParticipation{
    id: Number;
    spiller:Player;
    fraksjon:Faction;
    poeng:Number;
    posisjon:Number;
}
