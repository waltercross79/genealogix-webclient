import { Component, OnInit, Input } from '@angular/core';
import { RecordsService } from '../../records/services/records.service';
import { RecordType, RecordThumbnail } from '../../records/services/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-person-records',
  template: `
  <div fxLayout="row wrap" fxLayoutGap="10px">
    <div *ngFor="let t of thumbnails" 
      class="margin-top20" 
      style="width: 150px; height: 150px; border: 1px solid red;"> 
      <img [src]="t.safeUrl" 
        alt="{{ t.date | date }} - {{ t.type | recordType }}" />
    </div>
  </div>
  `,
  styles: []
})
export class PersonRecordsComponent implements OnInit {

  @Input() personId: number;  
  thumbnails: RecordThumbnail[] = [];

  constructor(private recordService: RecordsService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.recordService.getThumbnails(this.personId).subscribe(rs => {
      rs.forEach(r => {
        r.src.then(s => {
          r.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(s);
        });
      });
      this.thumbnails = rs;
    });
  }
}


