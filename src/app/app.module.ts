import { BrowserModule } from '@angular/platform-browser';
import { routing} from './app.routing';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpagelistingsComponent } from './frontpagelistings/frontpagelistings.component';
import { PlayersComponent } from './players/players.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { EditgameComponent } from './editgame/editgame.component';
import { GamesComponent } from './games/games.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './companies/companies.component';
import { GamesessionComponent } from './gamesession/gamesession.component';
import { EditgamesessionComponent } from './editgamesession/editgamesession.component';
import { DeltakelseComponent } from './partials/deltakelse/deltakelse.component';
import { LoginComponent } from './login/login.component';

import { SessionService } from './service/session.service';
import { AjaxerrorService } from './ajaxerror.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { GamesessiondisplayComponent } from './gamesessiondisplay/gamesessiondisplay.component';


export function initializeApp1(appInitService: SessionService) {
  return (): Promise<any> => { 
    return appInitService.init();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    FrontpagelistingsComponent,
    PlayersComponent,
    MenuComponent,
    PlayerComponent,
    EditplayerComponent,
    EditgameComponent,
    GamesComponent,
    CompanyComponent,
    CompaniesComponent,
    GamesessionComponent,
    EditgamesessionComponent,
    DeltakelseComponent,
    LoginComponent,
    GamedisplayComponent,
    GamesessiondisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgSelectModule,
  ],
  providers: [ 
    SessionService,{ provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [SessionService], multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxerrorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
