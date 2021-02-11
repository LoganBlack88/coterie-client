import { Component, Input } from '@angular/core';
import { Attribute } from './attribute.interface';
import { StateAwareComponent } from '../state-aware.component';


@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html',
    styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent extends StateAwareComponent {

    @Input() attribute: Attribute;

    constructor() {
        super();
    }

    afterStateChange(): void {
        // do nothing
    }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.attribute.ranks = (value === this.attribute.ranks) ? 0 : value;
    }

}
