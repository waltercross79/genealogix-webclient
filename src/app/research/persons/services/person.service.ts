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
        middleName: null, gender: 'M', marriages: []
      },
      { 
        id: 2, firstName: 'Kuba', lastName: 'Pada', 
        dateOfBirth: new Date(1985, 4, 21), dateOfDeath: null, 
        middleName: null, gender: 'M', marriages: []
      },
      { 
        id: 3, firstName: 'Pepa', lastName: 'Taylor', 
        dateOfBirth: new Date(1990, 2, 24), dateOfDeath: null, 
        middleName: null, gender: 'M', marriages: []
      },
    ]));
  }

  create(person: Person): Observable<Person> {
    return new Observable<Person>(observer => { 
      observer.next({
      id: 4, firstName: 'New', lastName: 'Person', 
      dateOfBirth: new Date(2000, 1, 1), dateOfDeath: null, 
      middleName: null, gender: 'M', marriages: []});
    });
  }

  get(id: number, deep: boolean = false) : Observable<Person> {
    if(deep) {
      return new Observable<Person>(observer => {
        observer.next({
          id: id, firstName: 'Ladislav', lastName: 'Kriz', 
          dateOfBirth: new Date(1955, 2, 18), dateOfDeath: null, 
          middleName: null, gender: 'M',
          marriages: [
            {
              spouse: {id: 102, firstName: 'Zdenka', lastName: 'Stara', 
              dateOfBirth: new Date(1955, 4, 18), dateOfDeath: null, 
              middleName: null, gender: 'F', marriages: []},
              children: [
                {
                  id: 201, firstName: 'Ladislav', lastName: 'Kriz', 
                  dateOfBirth: new Date(1979, 9, 26), dateOfDeath: null, 
                  middleName: null, gender: 'M',
                  marriages: [
                    {
                      spouse: {id: 202, firstName: 'Sara', lastName: 'Boenig-Hadfield', 
                      dateOfBirth: new Date(1981, 11, 26), dateOfDeath: null, 
                      middleName: null, gender: 'F', marriages: []},
                      children: [
                        {
                          id: 301, firstName: 'Naithan', lastName: 'Hill', 
                          dateOfBirth: new Date(2002, 11, 13), dateOfDeath: null, 
                          middleName: null, gender: 'M',
                          marriages: []
                        },
                        {
                          id: 302, firstName: 'Tallula', lastName: 'Krizova', 
                          dateOfBirth: new Date(2012, 12, 1), dateOfDeath: null, 
                          middleName: null, gender: 'F',
                          marriages: []
                        }
                      ]
                    }
                  ]              
                },
                {
                  id: 203, firstName: 'Jakub', lastName: 'Kriz', 
                  dateOfBirth: new Date(1985, 4, 25), dateOfDeath: null, 
                  middleName: null, gender: 'M',
                  marriages: [
                    {
                      spouse: {id: 205, firstName: 'Tereza', lastName: 'Stejskalova', 
                      dateOfBirth: null, dateOfDeath: null, 
                      middleName: null, gender: 'F', marriages: []},
                      children: [
                        {
                          id: 303, firstName: 'Jonas', lastName: 'Kriz', 
                          dateOfBirth: new Date(2019, 3, 12), dateOfDeath: null, 
                          middleName: null, gender: 'M',
                          marriages: []
                        }
                      ]
                    }
                  ],
                }
              ]
            }
          ]          
          });
        });      
    } else {
      return new Observable<Person>(observer => { 
        observer.next({
        id: id, firstName: 'Sought', lastName: 'Person', 
        dateOfBirth: new Date(2000, 1, 1), dateOfDeath: new Date(2018, 12, 31), 
        middleName: 'Middle', gender: 'M', marriages: []});
      });
    }
  }

  save(person: Person) : Observable<Person> {
    let result = new Observable<Person>(observer => {      
      observer.next(person);
    });

    return result;
  }
}
