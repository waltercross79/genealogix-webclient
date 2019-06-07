import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../filters/filters.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectedFilters(filters: SearchCriteria) {
    console.log("Selected filters received in search component...")
    console.log(filters);
  }
}
