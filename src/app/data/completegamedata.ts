import { Game } from '../data/game';
import { PlayerGameRanking } from '../data/playergameranking';
import { FactionRanking } from '../data/factionranking';
import { FactionPlayerRanking } from '../data/factionplayerrating';

export interface CompleteGameData{
    game: Game;
    playerresults: PlayerGameRanking;
    factionresults: FactionRanking;
    factionplayerresults: FactionPlayerRanking;
}
