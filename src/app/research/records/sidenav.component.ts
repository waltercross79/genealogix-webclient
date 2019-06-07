import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-nav-list>
      <h3 matSubheader>Records</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/research/records">Home</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/research/records/search">Search</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/research/records/add">Add</a>
      <h3 matSubheader>Family Tree</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/research/gtree">Home</a>        
    </mat-nav-list>
  `,
  styles: []
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
