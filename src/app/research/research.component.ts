import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SideNavService } from '../shared/menu/sidenav.service';

@Component({
  selector: 'app-research',
  template: `
  <mat-toolbar>
      <a mat-raised-button routerLink="/research/records" color="accent" style="margin-right: 10px">Records</a>
      <a mat-raised-button routerLink="/research/persons" color="accent" style="margin-right: 10px">Persons</a>
      <a mat-raised-button routerLink="/research/gtree" color="accent">Family Tree</a>
    </mat-toolbar>
  <div style="padding: 20px;">         
              <router-outlet></router-outlet>
             </div>`  ,
  styles: [
    `.active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }`
  ]
})
export class ResearchComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
    this.sidenavService.changeMenu([
      { header: 'Research', items: [
        { text: 'Records', url: '/research/records', icon: 'folder_open' },
        { text: 'Persons', url: '/research/persons', icon: 'person_outline' },
        { text: 'Family Tree', url: '/research/gtree', icon: 'people_outline' }
      ]}
    ]);
  }

}
