import { Component, Input } from '@angular/core';
import { Skill } from './skill.interface';
import { StateAwareComponent } from '../state-aware.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent extends StateAwareComponent {

    @Input() skill: Skill;

    constructor() {
        super();
    }

    afterStateChange(): void {
        // do nothing
    }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.skill.ranks = (value === this.skill.ranks) ? 0 : value;
    }

}
