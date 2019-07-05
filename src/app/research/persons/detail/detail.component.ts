import { Component, OnInit } from '@angular/core';
import { Person } from '../services/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail.component.html',  
  styles: [
  `.person-detail-container div {
    margin-bottom: 10px;    
  }
  
  .person-detail-container {
    padding-top: 17px;
  }
  
  .person-detail-text {
    font-weight: bold;
  }`]
})
export class DetailComponent implements OnInit {

  person: Person;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // get person from route guard resolver
    this.activeRoute.data.subscribe(d => {
      this.person = d.person;
    })
  }

}
