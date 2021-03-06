import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from './discipline.interface';
import { StateAwareComponent } from '../state-aware.component';
import { CharacterSheetStates } from '../character-sheet-state.enum';
import { DisciplinePower } from './discipline-power.interface';
import { Attribute } from '../attribute/attribute.interface';
import { AbilitySelectionService } from '../ability/ability-selection.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent extends StateAwareComponent implements OnInit {

    @Input() discipline: Discipline;

    selected = false;

    constructor(private abilitySelectionService: AbilitySelectionService) {
        super();
    }

    ngOnInit(): void {
        this.abilitySelectionService.disciplineChange.subscribe((newDisc: Discipline) => {
            this.selected = this.abilitySelectionService.isCurrentDiscipline(this.discipline);
        });
    }

    afterStateChange(): void {
        // If in edit mode, fill all powers up to max of 5 so the edit fields are rendered
        if (this.state.value === CharacterSheetStates.EDIT) {
            while (this.discipline.powers.length < 5) {
                this.discipline.powers.push({ rank: 0, name: '' } as DisciplinePower);
            }
        }
        // If back in view mode, remove the empty powers we added for edit
        if (this.state.value === CharacterSheetStates.VIEW) {
            this.discipline.powers = this.discipline.powers.filter((power) => {
                return (power.name.trim() !== '');
            });
        }
    }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.discipline.ranks = (value === this.discipline.ranks) ? 0 : value;
    }

}
