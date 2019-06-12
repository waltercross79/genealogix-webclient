import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchCriteria } from '../filters/filters.component';
import { RecordsService } from '../services/records.service';
import { Record } from '../services/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  columnsToDisplay = ['recordDate', 'recordType', 'number', 'street', 'town', 'actions'];
  dataSource: MatTableDataSource<Record>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private recordsService: RecordsService, private router: Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Record>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectedFilters(filters: SearchCriteria) {
    console.log("Selected filters received in search component...")
    console.log(filters);
    this.recordsService.find().subscribe(result =>
      this.dataSource.data = result);
  }

  view(id: number) {
    this.router.navigate(['/research/records/' + id]);
  }
}
