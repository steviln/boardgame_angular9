import { Faction } from '../data/faction';
import { Scenario } from '../data/scenario';

export interface Game{
    id: Number;
    navn: String;
    fraksjoner: Faction[];
    scenarios: Scenario[];
    antall: Number;
    selskap: Number;
}

