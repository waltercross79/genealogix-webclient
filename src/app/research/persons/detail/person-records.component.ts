import { Component, OnInit, Input } from '@angular/core';
import { RecordsService } from '../../records/services/records.service';
import { RecordType, RecordThumbnail } from '../../records/services/models';

@Component({
  selector: 'app-person-records',
  template: `
  <div fxLayout="row wrap" fxLayoutGap="10px">
    <div *ngFor="let t of thumbnails" 
      class="margin-top20" 
      style="width: 150px; height: 150px; border: 1px solid red;"> 
      <img [src]="t.src" 
        alt="{{ t.date | date }} - {{ t.type | recordType }}" />
    </div>
  </div>
  `,
  styles: []
})
export class PersonRecordsComponent implements OnInit {

  @Input() personId: number;  
  thubmnails: RecordThumbnail[] = [];

  constructor(private recordService: RecordsService) { }

  ngOnInit() {
    this.recordService.getThumbnails(this.personId).subscribe(rs => {
      this.thubmnails = rs;
    });
  }
}


