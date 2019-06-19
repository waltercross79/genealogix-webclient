import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/shared/menu/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {    

    this.sidenavService.changeMenu([
      { header: 'Records', items: [
        { text: 'Home', url: '/research/records', icon: 'home'},
        { text: 'Search', url: '/research/records/search', icon: 'search'},
        { text: 'Add', url: '/research/records/add', icon: 'add'}
      ]}
    ]);
  }

}
