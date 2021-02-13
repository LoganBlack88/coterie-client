import { Die } from '../die/die.model';
import { DieType, DieTypes } from '../die/die-type.enum';


export class DicePool {

    /** The total number of dice in the pool, including hunger dice. */
    totalCount: number;
    /** The number of hunger dice in the pool. */
    hungerCount: number;

    /** The normal dice models. */
    normalDice: Die[];
    /** The hunger dice models. */
    hungerDice: Die[];

    /**  */
    result?: DicePoolResult;


    constructor(totalCount?: number, hungerCount?: number) {
        this.totalCount = totalCount || 0;
        this.hungerCount = hungerCount || 0;
        this.updatePool();
    }

    roll(): DicePoolResult {
        this.normalDice.forEach((die) => die.roll());
        this.hungerDice.forEach((die) => die.roll());
        this.result = this.interpret();
        return this.result;
    }

    private interpret(): DicePoolResult {
        let successes = 0;
        let normal10s = 0;
        let hunger10s = 0;
        let hunger1s = 0;

        this.normalDice.forEach((die) => {
            if (die.value > 5) { successes += 1; }
            if (die.value === 10) { normal10s += 1; }
        });
        this.hungerDice.forEach((die) => {
            if (die.value === 1) { hunger1s += 1; }
            if (die.value > 5) { successes += 1; }
            if (die.value === 10) { hunger10s += 1; }
        });

        const criticals = Math.floor((normal10s + hunger10s) / 2);
        successes += (criticals * 2);

        const possibleMessyCritical = (hunger10s > 0 && successes > 0);
        const possibleBestialFailure = (hunger1s > 0);
        const totalFailure = successes === 0;

        const result = new DicePoolResult(
            successes,
            criticals,
            totalFailure,
            possibleBestialFailure,
            possibleMessyCritical
        );
        return result;
    }

    private updatePool() {
        this.normalDice = [];
        this.hungerDice = [];

        const normalSize = (this.totalCount > this.hungerCount) ? this.totalCount - this.hungerCount : this.totalCount;
        this.fillPool(this.normalDice, normalSize, DieTypes.NORMAL);
        this.fillPool(this.hungerDice, this.hungerCount, DieTypes.HUNGER);
    }

    private fillPool(pool: Die[], dice: number, type: DieType) {
        for (let i = 0; i < dice; i++) {
            pool.push(new Die(type));
        }
    }

}

export class DicePoolResult {

    constructor(private successes: number,
                private criticals: number,
                private totalFailure: boolean,
                private possibleBestialFailure: boolean,
                private possibleMessyCritical: boolean) { }

    public getSuccesses(): number {
        return this.successes;
    }
    public getCriticals(): number {
        return this.criticals;
    }
    public isTotalFailure(): boolean {
        return this.totalFailure;
    }
    public isPossibleBestialFailure(): boolean {
        return this.possibleBestialFailure;
    }
    public isPossibleMessyCritical(): boolean {
        return this.possibleMessyCritical;
    }
}
