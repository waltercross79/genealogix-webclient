import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { PersonInRecord, Record } from '../services/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styles: []
})
export class PersonsComponent implements OnInit {

  // @Input() id: number;
  // @Input() persons: PersonInRecord[];
  @Input() record: Record;
  dataSource: MatTableDataSource<PersonInRecord>
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columnsToDisplay: string[] = ["personRole", "firstName", "lastName", "dob", "actions"];
  @Output() addPerson: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PersonInRecord>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = (this.record && this.record.persons) ? this.record.persons : [];
  }

  view(id) {
    console.log("View person ID:" + id);
  }

  remove(id) {
    console.log("Delete from record - person ID:" + id);
  }

  onAddPersonClicked() {
    this.addPerson.emit();
  }
}
