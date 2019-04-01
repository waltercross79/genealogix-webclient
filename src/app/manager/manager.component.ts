import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
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
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link">Manager's Dashboard</a>
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link">User Management</a>  
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/genealogist" matTooltip="Genealogist" aria-label="Genealogist"><mat-icon>list</mat-icon></button>    
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
