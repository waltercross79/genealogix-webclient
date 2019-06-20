import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonRole, Record, PersonInRecord } from '../services/models';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { PersonRolesPerRecordType } from '../services/record-type.pipe';
import { RecordsService } from '../services/records.service';
import { UiService } from 'src/app/common/ui.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../../persons/services/models';

@Component({
  selector: 'app-connect-persons',
  templateUrl: './connect-persons.component.html',
  styles: [
    `.divider-div {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
    }
    
    .bordered-div {
      border: solid rgba(108,108, 108) 1px; 
      border-radius: 5px;
      padding: 20px;
    }

    .commands-div {
      margin-top: 20px;
    }
    `
  ]
})
export class ConnectPersonsComponent implements OnInit {

  @Input() record: Record;
  connectedPerson: FormGroup;
  personRoles: PersonRole[] = [];
  @Output() connected: EventEmitter<PersonInRecord> = new EventEmitter<PersonInRecord>();
  
  id: number;  
  mode: string = 'edit'; // 'edit' for manual edits, 'search' for person search

  personInRecord: PersonInRecord = new PersonInRecord();

  private personRoleControl: FormControl = new FormControl();
  private firstNameControl: FormControl = new FormControl();
  private lastNameControl: FormControl = new FormControl();
  private dobControl: FormControl = new FormControl();
  private idControl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private router: Router) { 
  }

  ngOnInit() {
    this.id = this.record.id;
    this.personRoles = PersonRolesPerRecordType[this.record.recordType];
    
    this.connectedPerson = this.fb.group({
      "personRole": this.personRoleControl,
      "firstName": this.firstNameControl,
      "lastName": this.lastNameControl,
      "dob": this.dobControl,
      "id": this.idControl
    });    

    
    this.connectedPerson.valueChanges.subscribe(val => {
      this.updatePersonInRecord();
    });
  }

  getRecordPersonSearch() {
    //return `/research/records/${this.id}/persons/search`;
    this.mode = 'search';
  }

  updatePersonInRecord() {    
    this.personInRecord.id = this.idControl.value;
    this.personInRecord.firstName = this.firstNameControl.value;
    this.personInRecord.lastName = this.lastNameControl.value;
    this.personInRecord.dob = this.dobControl.value;
    this.personInRecord.role = this.personRoleControl.value;  
    
    this.connected.emit(this.personInRecord);
  }

  navigateToEditor() {
    this.router.navigate([
      `/research/records/edit/${this.id}`
    ]);
  }
  
  onPersonSelected(p: Person) {
    // populate form with person details.
    this.idControl.setValue(p.id);
    this.lastNameControl.setValue(p.lastName);
    this.firstNameControl.setValue(p.firstName);
    this.dobControl.setValue(p.dateOfBirth); 
    
    this.mode = 'edit';

    this.updatePersonInRecord();
  }

  showSearch() {
    this.mode = 'search';
  }

  cancelSearch() {
    this.mode = 'edit';
  }

}
