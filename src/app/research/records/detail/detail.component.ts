import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../services/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [`.record-detail-container div {
    margin-bottom: 10px;    
  }
  
  .record-detail-container {
    padding-top: 17px;
  }
  
  .record-detail-text {
    font-weight: bold;
  }`]
})
export class DetailComponent implements OnInit {

  images: string[] = [];
  record: Record;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get record details from router
    this.route.data.subscribe((data: {record: Record}) =>{
      this.record = data.record;
    });

    // download the image data and convert to base64 string
    this.getImage(Number.parseInt(this.route.snapshot.params['id']));
  }

  getImage(id: number) {
    this.images = ['iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='];
  }
}
