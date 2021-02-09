import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterSheetComponent } from './character-sheet.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SkillComponent } from './skill/skill.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
    declarations: [CharacterSheetComponent, AttributeComponent, SkillComponent, DisciplineComponent, DetailComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CharacterSheetModule { }
