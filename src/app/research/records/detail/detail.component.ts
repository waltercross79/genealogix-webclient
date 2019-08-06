import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../services/models';
import { ImageService } from 'src/app/shared/image.service';

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

  constructor(private route: ActivatedRoute, 
    private imageService: ImageService) {       
    }

  ngOnInit() {
    // get record details from router
    this.route.data.subscribe((data: {record: Record}) =>{      
      this.record = data.record;
    });

    // download the image data and convert to base64 string
    this.images = [this.record.image.imageb64];
    this.hasImage = true;
  }  
}
