import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Record, RecordType, PersonRole, RecordThumbnail } from './models';
import { catchError, mergeAll, concat } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ImageService } from 'src/app/shared/image.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  defaultImage: string;

  constructor(private http: HttpClient, private imageService: ImageService) { 
    this.defaultImage = imageService.getDefaultImage64();
  }

  find(): Observable<Record[]> {
    return null;
  }

  get(id: number) : Observable<Record> {
    return null;      
  }

  save(record: Record) : Observable<Record | string> {
    return null;
  }

  addPersonToRecord(record_id: number, firstName: string, lastName: string, 
    dateOfBirth: Date, person_id: number) : Observable<{ isSuccess: boolean, message: string}> {
      return null;
  }

  create(record: Record) {
    return this.http.post<Record>(environment.recordApiUrl + 'records/', record);
  }

  getThumbnails(person_id: number): Observable<RecordThumbnail[]> {
    return new Observable<RecordThumbnail[]>(o => {
      o.next([]);
    });
  }

  delete(id: number): Observable<void> {
    return new Observable((observer) => {
      observer.next();
    });
  }
}

