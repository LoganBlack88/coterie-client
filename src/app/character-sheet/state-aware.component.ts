import { CharacterSheetState, CharacterSheetStates } from './character-sheet-state.enum';
import { AfterViewInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export abstract class StateAwareComponent implements AfterViewInit {

    @Input() state: BehaviorSubject<CharacterSheetState>;

    abstract afterStateChange(): void;

    ngAfterViewInit() {
        // const view = this;
        this.state.subscribe(() => {
            this.afterStateChange();
        });
    }

    isEditState(): boolean {
        return this.state.value === CharacterSheetStates.EDIT;
    }

    isViewState(): boolean {
        return this.state.value === CharacterSheetStates.VIEW;
    }

}
