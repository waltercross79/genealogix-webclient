import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringDate'})
export class StringDatePipe implements PipeTransform {
  transform(value: Date): string {
      return value.toDateString();
  }
}