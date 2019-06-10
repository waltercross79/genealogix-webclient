import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research',
  template: `<div style="padding: 20px;">         
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

  constructor() { }

  ngOnInit() {
  }

}
