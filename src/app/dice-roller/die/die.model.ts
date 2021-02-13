import { DieType, DieTypes } from './die-type.enum';

export class Die {

    type: DieType;
    value: number;

    constructor(type?: DieType, value?: number) {
        this.type = type || DieTypes.NORMAL;
        this.value = value || 0;
    }

    roll(): number {
        this.value = Math.floor(Math.random() * 10) + 1;
        return this.value;
    }

}
