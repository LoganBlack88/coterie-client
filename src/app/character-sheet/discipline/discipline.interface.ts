import { DisciplinePower } from './discipline-power.interface';

export interface Discipline {

    name: string;
    ranks: number;
    resonanceActive: boolean;
    powers: DisciplinePower[];

}
