import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Attribute } from '../attribute/attribute.interface';
import { Discipline } from '../discipline/discipline.interface';
import { Skill } from '../skill/skill.interface';

@Injectable()
export class AbilitySelectionService {

    private attributeSubject = new BehaviorSubject<Attribute>(null);
    private disciplineSubject = new BehaviorSubject<Discipline>(null);
    private skillSubject = new BehaviorSubject<Skill>(null);

    public attributeChange: Observable<Attribute> = this.attributeSubject.asObservable();
    public disciplineChange: Observable<Discipline> = this.disciplineSubject.asObservable();
    public skillChange: Observable<Skill> = this.skillSubject.asObservable();

    constructor() {}


    public isCurrentAttribute(attribute: Attribute): boolean {
        return (attribute === this.attributeSubject.value);
    }

    public isCurrentDiscipline(discipline: Discipline): boolean {
        return (discipline === this.disciplineSubject.value);
    }

    public isCurrentSkill(skill: Skill): boolean {
        return (skill === this.skillSubject.value);
    }

    public updateAttribute(next: Attribute) {
        this.attributeSubject.next(next);
    }

    public updateDiscipline(next: Discipline) {
        this.disciplineSubject.next(next);
    }

    public updateSkill(next: Skill) {
        this.skillSubject.next(next);
    }

}
