import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchCriteria } from '../filters/filters.component';
import { RecordsService } from '../services/records.service';
import { Record } from '../services/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-search-records',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  columnsToDisplay = ['recordDate', 'recordType', 'number', 'street', 'town', 'actions'];
  dataSource: MatTableDataSource<Record>;
  filters: SearchCriteria;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private recordsService: RecordsService, private router: Router,
    private uiService: UiService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Record>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectedFilters(filters: SearchCriteria) {    
    this.filters = filters;
    this.doSearch();
  }

  private doSearch() {
    this.recordsService.find().subscribe(result =>
      this.dataSource.data = result);
  }

  view(id: number) {
    this.router.navigate(['/research/records/' + id]);
  }

  delete(id: number) {
    // Show dialog to confirm.

    this.uiService.showDialog("Confirmation", 
      "Are you sure you want to delete this record?",
      "Yes", "No").subscribe(isConfirmed => {
      if(isConfirmed) {
        this.recordsService.delete(id)
          .subscribe(
            () => this.doSearch(),
            error => this.uiService.showToast(error)
          );
      }
    });

    
  }
}
