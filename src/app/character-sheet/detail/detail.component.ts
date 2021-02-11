import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateAwareComponent } from '../state-aware.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends StateAwareComponent {

    @Input() label: string;
    @Input() value: any;
    @Output() valueChange = new EventEmitter<string>();

    constructor() {
        super();
    }

    afterStateChange(): void {
        // do nothing
    }

    onInput() {
        this.valueChange.emit(this.value);
    }

}
