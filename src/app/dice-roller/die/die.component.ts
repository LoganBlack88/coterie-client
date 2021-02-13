import { Component, Input } from '@angular/core';
import { Die } from './die.model';
import { DieTypes } from './die-type.enum';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.scss']
})
export class DieComponent {

    @Input() die: Die;

    DieTypes = DieTypes;

    constructor() {}

}
