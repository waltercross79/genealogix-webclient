import { Pipe, PipeTransform } from '@angular/core';
import { RecordType } from './models';
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