import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genealogist',
  styles: [`
   div[fxLayout] {margin-top: 32px;}
    `, `
    .active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }`
  ],
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/genealogist/records" routerLinkActive="active-link">Genealogical Records</a>
      <a mat-button routerLink="/genealogist/gtree" routerLinkActive="active-link">Genealogical Tree</a>        
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class GenealogistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
