/**
 * Ability "type" enum for Attributes and Skills.
 */
export class AbilityType {
    static PHYSICAL = 'Physical';
    static SOCIAL = 'Social';
    static MENTAL = 'Mental';

    private constructor() {}

    static all(): string[] {
        return [ this.PHYSICAL, this.SOCIAL, this.MENTAL ];
    }
}
