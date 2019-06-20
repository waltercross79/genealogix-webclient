import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'F':
        return 'Female';
      case 'M':
        return 'Male';
      default:
        return 'Unknown';
    }
  }
}