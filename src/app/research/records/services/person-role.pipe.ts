import { Pipe, PipeTransform } from '@angular/core';
import { PersonRole } from './models';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'personRole'})
export class PersonRolePipe implements PipeTransform {
  transform(value: PersonRole): string {
    switch (value)
    {
        case PersonRole.Bride:
            return "Bride";
        case PersonRole.Deceased:
            return "Deceased";
        case PersonRole.Father:
            return "Father";
        case PersonRole.Godparent:
            return "Godparent";
        case PersonRole.Groom:
            return "Groom";
        case PersonRole.Mother:
            return "Mother";
        case PersonRole.Newborn:
            return "Newborn";
        case PersonRole.Parent:
            return "Parent";
        case PersonRole.Witness:
            return "Witness";
        default:
            return "Uknown";
    }
  }
}