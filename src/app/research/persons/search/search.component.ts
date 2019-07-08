import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchCriteria } from '../filters/filters.component';
import { Person } from '../services/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PersonService } from '../services/person.service';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  columnsToDisplay = ['firstName', 'lastName', 'dob', 'dod', 'actions']  
  @Output() selected: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() cancelled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public  isInRecordContext: boolean = false;
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  filters: SearchCriteria;

  constructor(private personService: PersonService,
    private uiService: UiService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Person>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectedFilters(filters: SearchCriteria) {
    this.filters = filters;
    this.doSearch();
  }

  private doSearch() {
    this.personService.find().subscribe(result =>
      this.dataSource.data = result); 
  }

  onCancelled(isCancelled: boolean) {
    if(isCancelled) {
      this.cancelled.emit(true);
    }

  }

  select(id: number) {
    this.selected.emit(this.dataSource.data.find(p => p.id == id));
  }

  delete(id: number) {
    // Show dialog to confirm.

    this.uiService.showDialog("Confirmation", 
      "Are you sure you want to delete this record?",
      "Yes", "No").subscribe(isConfirmed => {
      if(isConfirmed) {
        this.personService.delete(id)
          .subscribe(
            () => this.doSearch(),
            error => this.uiService.showToast(error)
          );
      }
    });

    
  }
}
