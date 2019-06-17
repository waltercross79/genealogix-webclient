import { Injectable } from '@angular/core';
import { Person } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  find(): Observable<Person[]> {

    return new Observable<Person[]>(observer => observer.next([
      { 
        id: 1, firstName: 'Lada', lastName: 'Pada', 
        dateOfBirth: new Date(1979, 9, 26), dateOfDeath: null, 
        middleName: null, gender: 'M'
      },
      { 
        id: 2, firstName: 'Kuba', lastName: 'Pada', 
        dateOfBirth: new Date(1985, 4, 21), dateOfDeath: null, 
        middleName: null, gender: 'M'
      },
      { 
        id: 3, firstName: 'Pepa', lastName: 'Taylor', 
        dateOfBirth: new Date(1990, 2, 24), dateOfDeath: null, 
        middleName: null, gender: 'M'
      },
    ]));
  }
}
