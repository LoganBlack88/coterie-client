import { AfterViewInit, Component, Input } from '@angular/core';
import { DicePool } from './dice-pool.model';


@Component({
  selector: 'app-dice-pool',
  templateUrl: './dice-pool.component.html',
  styleUrls: ['./dice-pool.component.scss']
})
export class DicePoolComponent implements AfterViewInit {

    @Input() dicePool: DicePool;

    constructor() {
    }

    ngAfterViewInit(): void {
        console.log(this.dicePool);
    }

}
