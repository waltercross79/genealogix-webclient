import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Person } from './models';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { mergeMap, take, catchError, map } from 'rxjs/operators';
import { PersonService } from './person.service';

@Injectable({
    providedIn: 'root'
})
export class PersonResolver implements Resolve<Person> {

    constructor(private personService: PersonService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<Person> | Observable<never> {
        
        let id: number = parseInt(route.paramMap.get("id"));

        let o = this.personService.get(id);
        let o1 = o.pipe(  
            take(1),          
            catchError(err => {
                console.log(err);
                return EMPTY;
            })            
        );
        let o2 = o1.pipe(
            mergeMap(person => {
                if(person) {
                    return of(person);
                } else {
                    this.router.navigate(['/research/persons']);
                    return EMPTY;
                }
            }),
            catchError(err => {
                console.log(err);
                return of(undefined);
            })
        );

        return o2;    
    }
}