import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/shared/menu/sidenav.service';

@Component({
  selector: 'app-home-person',
  template: `
    <router-outlet></router-outlet>
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
