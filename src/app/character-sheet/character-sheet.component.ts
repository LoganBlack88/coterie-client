import { Component, OnInit } from '@angular/core';
import { CharacterSheet } from './character-sheet.model';
import { AbilityType } from './ability/ability-type.enum';
import { Discipline } from './discipline/discipline.interface';
import { CharacterSheetState, CharacterSheetStates } from './character-sheet-state.enum';
import { BehaviorSubject } from 'rxjs';


const MODEL = new CharacterSheet({
        name: 'Logan Christian Black',
        concept: 'V5 Programmer',
        chronicle: 'Coaterie App',
        ambition: 'Actually finish this?',
        desire: 'Finish the view',
        predatorType: 'Sandman',
        clan: 'Tremere',
        generation: '12',
        sire: ' ?? ',
        disciplines: [{
            name: 'Animalism',
            ranks: 1,
            resonanceActive: false,
            powers: [
                { rank: 1, name: 'Sense the Beast' }
            ]
        }, {
            name: 'Fortitude',
            ranks: 5,
            resonanceActive: false,
            powers: [
                { rank: 1, name: 'Resilience' },
                { rank: 2, name: 'Toughness' },
                { rank: 3, name: 'Defy Bane' },
                { rank: 4, name: 'Draught of Endurance' },
                { rank: 5, name: 'Flesh of Marble' }
            ]
        }, {
            name: 'Presence',
            ranks: 2,
            resonanceActive: false,
            powers: [
                { rank: 1, name: 'Awe' },
                { rank: 1, name: 'Daunt' }
            ]
        }, {
            name: 'Blood Sorcery',
            ranks: 3,
            resonanceActive: false ,
            powers: [
                { rank: 1, name: 'A Taste for Blood' },
                { rank: 1, name: 'Corrosive Vitae' },
                { rank: 3, name: 'Scorpion\'s Touch' }
            ]
        }]
    } as CharacterSheet);

const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * Math.floor(max - 1)) + min;
};
MODEL.attributes.forEach((attr) => attr.ranks = random(1, 5));
MODEL.skills.forEach((skill) => skill.ranks = random(0, 5));

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

    AbilityType = AbilityType;
    CharacterSheetStates = CharacterSheetStates;

    character: CharacterSheet;
    disciplineRows: Discipline[][];

    state: BehaviorSubject<CharacterSheetState> = new BehaviorSubject(CharacterSheetStates.VIEW);

    constructor() {
    }

    ngOnInit(): void {
        this.character = MODEL;
        this.disciplineRows = this.getDisciplinesForGrid();
    }

    toggleState(): void {
        if (this.state.value === CharacterSheetStates.VIEW) {
            this.state.next(CharacterSheetStates.EDIT);
        } else {
            this.state.next(CharacterSheetStates.VIEW);
        }
    }

    private getDisciplinesForGrid(): Discipline[][] {
        if (this.character.disciplines.length <= 3) {
            const res =  [
                // return a shallow clone array
                Object.assign([], this.character.disciplines)
            ];
            return res;
        }

        const results: Discipline[][] = [];
        const rows = Math.ceil(this.character.disciplines.length / 3);
        for (let i = 0; i < rows; i++) {
            const start = i * 3;
            const end = Math.min(((i * 3) + 3), this.character.disciplines.length);
            results.push(this.character.disciplines.slice(start, end));
        }
        return results;
    }

}
