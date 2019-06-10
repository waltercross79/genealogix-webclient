import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../filters/filters.component';
import { RecordsService } from '../services/records.service';
import { Record } from '../services/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  records: Record[] = [];
  columnsToDisplay = ['recordDate', 'recordType', 'number', 'street', 'town'];

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }

  onSelectedFilters(filters: SearchCriteria) {
    console.log("Selected filters received in search component...")
    console.log(filters);
    this.recordsService.find().subscribe(result =>
      this.records = result);
  }
}
