import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiceLogComponent } from './dice-log/dice-log.component';
import { DicePoolComponent } from './dice-pool/dice-pool.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { DieComponent } from './die/die.component';


@NgModule({
    declarations: [
        DiceLogComponent,
        DicePoolComponent,
        DiceTrayComponent,
        DieComponent
    ],
    exports: [
        DiceLogComponent,
        DiceTrayComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DiceRollerModule { }
