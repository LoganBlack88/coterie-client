import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetModule } from '../character-sheet/character-sheet.module';
import { DiceRollerModule } from '../dice-roller/dice-roller.module';
import { CoterieComponent } from './coterie.component';


@NgModule({
    declarations: [CoterieComponent],
    imports: [
        CommonModule,
        CharacterSheetModule,
        DiceRollerModule
    ]
})
export class CoterieModule { }
