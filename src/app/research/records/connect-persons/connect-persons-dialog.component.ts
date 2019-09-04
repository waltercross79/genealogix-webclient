import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonInRecord, Record, PersonRole } from '../services/models';
import { PersonRolesPerRecordType } from '../services/record-type.pipe';
import { Person } from '../../persons/services/models';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PersonService } from '../../persons/services/person.service';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-connect-persons-dialog',
  templateUrl: './connect-persons-dialog.component.html',
  styles: []
})
export class ConnectPersonsDialogComponent implements OnInit {
  
  pir: PersonInRecord;
  valid: boolean = false;
  personRoles: PersonRole[] = [];  
  mode: string;
  record: Record;
  person: Person;
  personRoleControl: FormControl = new FormControl('', [Validators.required]);
  editor: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ConnectPersonsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { record: Record, mode: string },
    private fb: FormBuilder, private personService: PersonService, private uiService: UiService) { 
      this.mode = data.mode;
      this.record = data.record;
    }

  cancel(): void {
    this.dialogRef.close();
  }

  submit() {
    if(this.mode == 'create') {
      this.personService.create(this.person).subscribe(p => {
        this.pir.id = p.id;
        this.dialogRef.close(this.pir);
      }, error => this.uiService.showToast(error));      
    } else {
      this.dialogRef.close(this.pir);
    }    
  }

  onPersonConnected(person: Person){
    this.person = person;

    if(person != null) {
      this.pir = new PersonInRecord(this.personRoleControl.value,
        person.firstName, person.lastName, person.id, person.dateOfBirth);
      
      this.valid = true;
    } else {
      this.pir = null;
      this.valid = false;
    }    
  }

  ngOnInit(): void {
    this.personRoles = PersonRolesPerRecordType[this.record.recordType];
    this.editor = this.fb.group({
      "role": this.personRoleControl
    });
  }

  resetSearch() {
    this.person = null;
    this.pir = null;
    this.valid = false;
  }
}
