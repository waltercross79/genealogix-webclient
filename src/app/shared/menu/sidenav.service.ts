import { Injectable } from '@angular/core';
import { SideNavGroup } from './sidenav.viewmodel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  _subject: Subject<SideNavGroup[]>;

  constructor() { 
    this._subject = new Subject<SideNavGroup[]>();
  }

  public get currentMenu(): Subject<SideNavGroup[]> {
    return this._subject;
  }

  public changeMenu(menu: SideNavGroup[]) {
    this._subject.next(menu);
  }
}
