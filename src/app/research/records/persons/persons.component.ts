import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { PersonInRecord, Record } from '../services/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UiService } from 'src/app/common/ui.service';

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
  @Output() findPerson: EventEmitter<any> = new EventEmitter<any>();
  @Output() removePerson: EventEmitter<PersonInRecord> = new EventEmitter<PersonInRecord>();

  constructor(private uiService: UiService) { }

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
    // show dialog
    this.uiService.showDialog("Confirm Removal", 
      "Are you sure you want to remove this person from the record?",
      "Yes", "No").subscribe(confirmed => {
        if(confirmed) {
          this.removePerson.emit(this.dataSource.data.find(pir => pir.id == id));
        }
      });
  }

  onAddPersonClicked() {
    this.addPerson.emit();
  }

  onFindPersonClicked() {
    this.findPerson.emit();
  }

  public setData(data: PersonInRecord[]) {
    this.dataSource.data = data ? data : [];
  }
}
