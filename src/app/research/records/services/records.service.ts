import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record, RecordType } from './models';
import { Observable } from 'rxjs/internal/Observable';

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
              registry: 'Book 1'  
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
              registry: 'Book 2'  
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
        registry: 'Book 2'  
      }
    ));      
  }

  save(record: Record) : Observable<Record | string> {
    let result = new Observable<Record>(observer => {
      record.id = 99;
      observer.next(record);
    });

    return result;
  }
}
