import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbilitySelectionService } from './ability/ability-selection.service';
import { AttributeComponent } from './attribute/attribute.component';
import { CharacterSheetComponent } from './character-sheet.component';
import { DetailComponent } from './detail/detail.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { SkillComponent } from './skill/skill.component';


@NgModule({
    declarations: [
        AttributeComponent,
        CharacterSheetComponent,
        DetailComponent,
        DisciplineComponent,
        SkillComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        AbilitySelectionService
    ]
})
export class CharacterSheetModule { }
