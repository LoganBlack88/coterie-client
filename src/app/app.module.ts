import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { CoterieModule } from './coterie/coterie.module';
import { DiceRollerModule } from './dice-roller/dice-roller.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CharacterSheetModule,
        CoterieModule,
        DiceRollerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
