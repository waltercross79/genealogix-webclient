import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Record, RecordType, PersonRole, RecordThumbnail, PersonInRecord } from './models';
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

  find(recordDateFrom?: Date, recordDateTo?: Date, includeBirths?: boolean,
    includeDeaths?: boolean, includeMarriages?: boolean, street?: string,
    number?: string, town?: string, country?: string, folio?: string,
    registry?: string, firstName?: string, lastName?: string): Observable<Record[]> {
    return this.http.get<Record[]>(environment.recordApiUrl + 'record', {
      params: { 
        "RecordDateFrom": recordDateFrom ? recordDateFrom.toDateString() : '',
        "RecordDateTo": recordDateTo ? recordDateTo.toDateString() : '',
        "IncludeBirths": includeBirths ? 'true' : 'false',
        "IncludeDeaths": includeDeaths ? 'true' : 'false',
        "IncludeMarriages": includeMarriages ? 'true' : 'false',
        "Street": street ? street : '',
        "Number": number ? number : '',
        "Town": town ? town : '',
        "Country": country ? country : '',
        "Folio": folio ? folio : '',
        "Registry": registry ? registry : '',
        "FirstName": firstName ? firstName : '',
        "LastName": lastName ? lastName : ''
      }
    });
  }

  get(id: string) : Observable<Record> {
    return this.http.get<Record>(environment.recordApiUrl + 'record/' + id);      
  }

  save(record: Record) : Observable<Record> {
    return this.http.put<Record>(environment.recordApiUrl + 'record/' + record.id, record);
  }

  addPersonToRecord(record_id: string, pir: PersonInRecord) : Observable<void> {
      return this.http.post<void>(environment.recordApiUrl + 'record/' + record_id + '/AddPerson', pir);
  }

  create(record: Record) {
    return this.http.post<Record>(environment.recordApiUrl + 'record', record);
  }

  getThumbnails(person_id: number): Observable<RecordThumbnail[]> {
    return new Observable<RecordThumbnail[]>(o => {
      o.next([]);
    });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.recordApiUrl + 'record/' + id);
  }
}

