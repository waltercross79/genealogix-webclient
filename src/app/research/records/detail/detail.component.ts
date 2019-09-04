import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../services/models';
import { ImageService } from 'src/app/shared/image.service';
import { mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-detail-records',
  templateUrl: './detail.component.html',
  styles: [`.record-detail-container div {
    margin-bottom: 10px;    
  }
  
  .record-detail-container {
    padding-top: 17px;
  }
  
  .record-detail-text {
    font-weight: bold;
  }
  
  #idOnHTML {
    margin-top: 50px;
  }`]
})
export class DetailComponent implements OnInit {

  images: string[];
  record: Record;
  hasImage: Boolean = false;
  downloadingImage: Boolean = false;
  imageIndexOne = 0;  

  constructor(private route: ActivatedRoute, 
    private imageService: ImageService) {       
    }

  ngOnInit() {
    // get record details from router
    this.route.data
    .subscribe((data: {record: Record}) =>{      
      this.record = data.record;
      this.downloadingImage = true;
      this.imageService.get(this.record.imageIdentifiers[0])
        .subscribe(i => {
          this.images = [i.value];
          this.hasImage = true;
          this.downloadingImage = false;
        });      
    });
  }  
}
