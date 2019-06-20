import { Component, OnInit } from '@angular/core';
import { Person } from '../services/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <h2 class="mat-h2">Person Details</h2>
    <div fxLayout="column" class="person-detail-container">
      
      <div fxLayout="row wrap" fxLayout.xs="column">
        <div fxFlex="20">
          Name:
        </div>
        <div class="person-detail-text">
          {{ person.lastName }}, {{ person.firstName }} {{ person.middleName }} 
        </div>
      </div>
      <div fxLayout="row wrap" fxLayout.xs="column">
        <div fxFlex="20">
          Gender:
        </div>
        <div class="person-detail-text">
          {{ person.gender | gender }}
        </div>
      </div>
      <div fxLayout="row wrap" fxLayout.xs="column">
        <div fxFlex="20">
          Dates:
        </div>
        <div class="person-detail-text">
          {{ person.dateOfBirth | date }} <span *ngIf="person.dateOfDeath!=null"><span style="margin-left: 20px;"></span>-<span style="margin-right: 20px;"></span>{{ person.dateOfDeath | date }}</span>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  `,
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
