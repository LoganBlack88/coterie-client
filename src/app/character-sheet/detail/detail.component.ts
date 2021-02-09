import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {


    @Input() label: string;
    @Input() value: any;
    @Output() valueChange = new EventEmitter<string>();

    constructor() {}

    onInput() {
        this.valueChange.emit(this.value);
    }

}
