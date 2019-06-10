import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Record } from './models';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { RecordsService } from './records.service';

@Injectable({
    providedIn: 'root'
})
export class RecordResolver implements Resolve<Record> {

    constructor(private recordsService: RecordsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<Record> | Observable<never> {
        
        let id: number = parseInt(route.paramMap.get("id"));

        return this.recordsService.get(id).pipe(
            take(1),
            mergeMap(record => {
                if(record) {
                    return of(record);
                } else {
                    this.router.navigate(['/research/records']);
                    return EMPTY;
                }
            })
        );        
    }
}