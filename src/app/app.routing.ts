import { RouterModule} from '@angular/router';

import { FrontpagelistingsComponent } from './frontpagelistings/frontpagelistings.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { GamesComponent } from './games/games.component';
import { EditgameComponent } from './editgame/editgame.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './companies/companies.component';
import { EditgamesessionComponent } from './editgamesession/editgamesession.component';
import { LoginComponent } from './login/login.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';


export const routing = RouterModule.forRoot([
    {path: '', component: FrontpagelistingsComponent},
    {path: 'spillere', component: PlayersComponent },
    {path: 'spiller/:id', component: PlayerComponent },
    {path: 'editspiller/:id', component: EditplayerComponent },
    {path: 'games', component: GamesComponent },
    {path: 'editgame/:id', component: EditgameComponent },
    {path: 'companies', component: CompaniesComponent },
    {path: 'company/:id', component: CompanyComponent },
    {path: 'login', component: LoginComponent },
    {path: 'displaygame/:id', component: GamedisplayComponent },
    {path: 'editgamesession/:id/:game', component: EditgamesessionComponent }
    
]);