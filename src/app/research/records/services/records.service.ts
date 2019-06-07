import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Record, RecordType } from './models';
import { Observable } from 'rxjs';

Injectable()
export class RecordsService implements IRecordsService {
    
    constructor(private http: HttpClient) {}

    find(): Observable<Record[]> {
        return new Observable<Record[]>(observer => {
            observer.next([
                { 
                    id: 1,
                    recordDate: new Date(2000, 12, 31), 
                    recordType: RecordType.Birth, 
                    location: {
                        street: 'Main',
                        number: '123',
                        town: 'Springfield',
                        country: ''
                    }, 
                    folio: '201', 
                    registry: 'Book 1'  
                },
                { 
                    id: 2,
                    recordDate: new Date(2001, 5, 31), 
                    recordType: RecordType.Marriage, 
                    location: {
                        street: 'Wall St',
                        number: '124',
                        town: 'Springville',
                        country: 'US'
                    }, 
                    folio: '211', 
                    registry: 'Book 2'  
                }
            ]);
        });
    }    
}

/*
export interface Location {
    street: string,
    number: string,
    town: string,
    country: string
}
*/    

export interface IRecordsService {
    find(): Observable<Record[]>;
}