import { Component, Input, OnInit } from '@angular/core';
import { Attribute } from './attribute.interface';
import { StateAwareComponent } from '../state-aware.component';
import { AbilitySelectionService } from '../ability/ability-selection.service';


@Component({
    selector: 'app-attribute',
    templateUrl: './attribute.component.html',
    styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent extends StateAwareComponent implements OnInit {

    @Input() attribute: Attribute;

    selected = false;

    constructor(private abilitySelectionService: AbilitySelectionService) {
        super();
    }

    ngOnInit(): void {
        this.abilitySelectionService.attributeChange.subscribe((newAttr: Attribute) => {
            this.selected = this.abilitySelectionService.isCurrentAttribute(this.attribute);
        });
    }

    afterStateChange(): void {
        // do nothing
    }

    onDotClick(value: number) {
        // If they toggled the current rank, reset skill to 0
        this.attribute.ranks = (value === this.attribute.ranks) ? 0 : value;
    }

}
