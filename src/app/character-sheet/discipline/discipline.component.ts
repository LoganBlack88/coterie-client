import { Component, Input } from '@angular/core';
import { Discipline } from './discipline.interface';
import { DisciplinePower } from './discipline-power.interface';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent {

    @Input()
    discipline: Discipline;

    constructor() { }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.discipline.ranks = (value === this.discipline.ranks) ? 0 : value;
    }

    getPowers(): DisciplinePower[] {
        console.log('getPowers()');
        const powers = this.discipline.powers.slice(0, this.discipline.powers.length);
        powers.sort((a, b) => {
            if (a.rank === b.rank) {
                return (a.name < b.name) ? -1 : 1;
            } else {
                return (a.rank < b.rank) ? -1 : 1;
            }
        });
        return powers;
    }

}
