import { Pipe, PipeTransform } from '@angular/core';
import { RecordType, PersonRole } from './models';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'recordType'})
export class RecordTypePipe implements PipeTransform {
  transform(value: RecordType): string {
    switch (value)
    {
        case RecordType.Birth:
            return "Birth";
        case RecordType.Death:
            return "Death";
        case RecordType.Marriage:
            return "Marriage";
        default:
            return "Uknown";
    }
  }
}

export const PersonRolesPerRecordType: { [key in RecordType] : PersonRole[] } = {
  [RecordType.Marriage]: [PersonRole.Bride, PersonRole.Groom, PersonRole.Parent, PersonRole.Witness],
  [RecordType.Death]: [PersonRole.Deceased, PersonRole.Mother, PersonRole.Father],
  [RecordType.Birth]: [PersonRole.Newborn, PersonRole.Mother, PersonRole.Father]
}