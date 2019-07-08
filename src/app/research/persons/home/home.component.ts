import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/shared/menu/sidenav.service';

@Component({
  selector: 'app-home-person',
  template: `
  <h2 class="mat-h2">Persons and Relations</h2>
  <p>
      This is home page of Persons functionality. You can search, edit and view.
  </p>
  
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
    this.sidenavService.changeMenu([
      { header: 'Persons', items: [
        { text: 'Home', url: '/research/persons', icon: 'home'},
        { text: 'Search', url: '/research/persons/search', icon: 'search'},
        { text: 'Add', url: '/research/persons/add', icon: 'add'}
      ]}
    ]);
  }

}
