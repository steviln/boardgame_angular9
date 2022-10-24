import { FullParticipation } from '../data/fullparticipation';
import { Game } from '../data/game';
import { Scenario } from '../data/scenario';

export interface SingleGamesession{
    id: Number;
    dato: String;
    scenario:Scenario;
    competitors:Number;
    spillet:Game;
    deltakelser:FullParticipation[];
}
