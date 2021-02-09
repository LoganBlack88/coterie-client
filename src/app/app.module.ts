import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CharacterSheetModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
