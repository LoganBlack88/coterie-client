import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './skill.interface';
import { StateAwareComponent } from '../state-aware.component';
import { Discipline } from '../discipline/discipline.interface';
import { AbilitySelectionService } from '../ability/ability-selection.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent extends StateAwareComponent implements OnInit {

    @Input() skill: Skill;

    selected = false;

    constructor(private abilitySelectionService: AbilitySelectionService) {
        super();
    }

    ngOnInit(): void {
        this.abilitySelectionService.skillChange.subscribe((newSkill: Skill) => {
            this.selected = this.abilitySelectionService.isCurrentSkill(this.skill);
        });
    }

    afterStateChange(): void {
        // do nothing
    }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.skill.ranks = (value === this.skill.ranks) ? 0 : value;
    }

}
