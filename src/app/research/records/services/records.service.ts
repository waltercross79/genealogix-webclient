import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record, RecordType, PersonRole } from './models';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { 

  }

  find(): Observable<Record[]> {
    return new Observable<Record[]>(observer => {
      observer.next([
          { 
              id: 1,
              recordDate: new Date(2000, 12, 31), 
              recordType: RecordType.Birth, 
              street: 'Main',
              number: '123',
              town: 'Springfield',
              country: '',
              folio: '201', 
              registry: 'Book 1',
              persons: []  
          },
          { 
              id: 2,
              recordDate: new Date(2001, 5, 31), 
              recordType: RecordType.Marriage, 
              street: 'Wall St',
              number: '124',
              town: 'Springville',
              country: 'US',
              folio: '211', 
              registry: 'Book 2',
              persons: []
          }
      ]);
  });
  }

  get(id: number) : Observable<Record> {
    return new Observable<Record>(observer => observer.next(
      {id: 2,
        recordDate: new Date(2001, 5, 31), 
        recordType: RecordType.Birth, 
        street: 'Wall St',
        number: '124',
        town: 'Springville',
        country: 'US',
        folio: '211', 
        registry: 'Book 2',
        persons: [
          { id: 1, firstName: 'Lada', lastName: 'Pada', role: PersonRole.Newborn, dob: new Date(1979, 9, 26) },
          { id: 2, firstName: 'Lada', lastName: 'Pada, Sr.', role: PersonRole.Father, dob: new Date(1955, 2, 18) },
          { id: 3, firstName: 'Zdenka', lastName: 'Padova', role: PersonRole.Mother, dob: new Date(1955, 2, 18) }
        ]  
      }
    )).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );      
  }

  save(record: Record) : Observable<Record | string> {
    let result = new Observable<Record>(observer => {
      record.id = 99;
      observer.next(record);
    });

    return result;
  }
}
