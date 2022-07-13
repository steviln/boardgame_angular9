import { Participation } from '../data/participation';

export interface Gamesession{
    id: Number;
    dato: String;
    scenarioID:Number;
    competitors:Number;
    spillet:Number;
    deltakelser:Participation[];
}
