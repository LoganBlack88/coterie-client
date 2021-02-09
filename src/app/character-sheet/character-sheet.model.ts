import { AbilityType } from './ability/ability-type.enum';
import { Attribute } from './attribute/attribute.interface';
import { Skill } from './skill/skill.interface';
import { Discipline } from './discipline/discipline.interface';

const ATTRIBUTES: Attribute[] = [
    { name: 'Strength',     type: AbilityType.PHYSICAL, ranks: 0, bloodSurgeActive: false },
    { name: 'Dexterity',    type: AbilityType.PHYSICAL, ranks: 0, bloodSurgeActive: false },
    { name: 'Stamina',      type: AbilityType.PHYSICAL, ranks: 0, bloodSurgeActive: false },
    { name: 'Charisma',     type: AbilityType.SOCIAL,   ranks: 0, bloodSurgeActive: false },
    { name: 'Manipulation', type: AbilityType.SOCIAL,   ranks: 0, bloodSurgeActive: false },
    { name: 'Composure',    type: AbilityType.SOCIAL,   ranks: 0, bloodSurgeActive: false },
    { name: 'Intelligence', type: AbilityType.MENTAL,   ranks: 0, bloodSurgeActive: false },
    { name: 'Wits',         type: AbilityType.MENTAL,   ranks: 0, bloodSurgeActive: false },
    { name: 'Resolve',      type: AbilityType.MENTAL,   ranks: 0, bloodSurgeActive: false }
];

const SKILLS: Skill[] = [
    { name: 'Athletics',     type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Brawl',         type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Craft',         type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Drive',         type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Firearms',      type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Larceny',       type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Melee',         type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Stealth',       type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },
    { name: 'Survival',      type: AbilityType.PHYSICAL, ranks: 0, specialities: [] },

    { name: 'Animal Ken',    type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Etiquette',     type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Insight',       type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Intimidation',  type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Leadership',    type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Performance',   type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Persuasion',    type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Streetwise',    type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },
    { name: 'Subterfuge',    type: AbilityType.SOCIAL,   ranks: 0, specialities: [] },

    { name: 'Academics',     type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Awareness',     type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Finance',       type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Investigation', type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Medicine',      type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Occult',        type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Politics',      type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Science',       type: AbilityType.MENTAL,   ranks: 0, specialities: [] },
    { name: 'Technology',    type: AbilityType.MENTAL,   ranks: 0, specialities: [] }
];

export class CharacterSheet {

    name: string;
    concept: string;
    chronicle: string;

    ambition: string;
    desire: string;
    predatorType: string;

    clan: string;
    generation: string;
    sire: string;

    attributes: Attribute[] = ATTRIBUTES;
    skills: Skill[] = SKILLS;
    disciplines?: Discipline[];

    constructor(from?: CharacterSheet) {
        Object.assign(this, from);
    }


    public getAttributesByType(type: string): Attribute[] {
        return this.attributes.filter(attr => attr.type === type);
    }

    public getSkillsByType(type: string): Skill[] {
        return this.skills.filter(skills => skills.type === type);
    }

}






