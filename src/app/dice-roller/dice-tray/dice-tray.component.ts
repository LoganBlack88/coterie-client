import { Component } from '@angular/core';
import { DicePool } from '../dice-pool/dice-pool.model';

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.scss']
})
export class DiceTrayComponent {

    dicePool: DicePool;


    constructor() {
        this.dicePool = new DicePool(5, 2);
    }

    rollDice() {
        this.dicePool.roll();
    }

}
