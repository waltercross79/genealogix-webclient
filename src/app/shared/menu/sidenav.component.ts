import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SideNavGroup } from './sidenav.viewmodel';
import { SideNavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',  
})
export class SideNavComponent implements OnInit {

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  menu: SideNavGroup[] = [];

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
    // hook into the sidenav service and listen for changes
    this.sidenavService.currentMenu
      .subscribe(m => {
        this.menu = m;
        this.changed.emit();
      });
  }


}
