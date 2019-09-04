import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Record, RegistryRecord } from './models';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { mergeMap, take, catchError, map } from 'rxjs/operators';
import { RecordsService } from './records.service';

@Injectable({
    providedIn: 'root'
})
export class RecordResolver implements Resolve<Record> {

    constructor(private recordsService: RecordsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<Record> | Observable<never> {
        
        let id: string = route.paramMap.get("id");

        let o = this.recordsService.get(id);
        let o1 = o.pipe(  
            take(1),          
            catchError(err => {
                console.log(err);
                return EMPTY;
            })            
        );
        let o2 = o1.pipe(
            mergeMap(record => {
                if(record) {
                    return of(record);
                } else {
                    this.router.navigate(['/research/records']);
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