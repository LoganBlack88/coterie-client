import { Component, Input } from '@angular/core';
import { Attribute } from './attribute.interface';


@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html',
    styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {

    @Input()
    attribute: Attribute;

    constructor() { }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.attribute.ranks = (value === this.attribute.ranks) ? 0 : value;
    }

}
