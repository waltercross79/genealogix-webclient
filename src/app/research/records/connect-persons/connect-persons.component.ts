import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonRole } from '../services/models';

@Component({
  selector: 'app-connect-persons',
  templateUrl: './connect-persons.component.html',
  styles: []
})
export class ConnectPersonsComponent implements OnInit {

  connectedPerson: FormGroup;
  personRoles: PersonRole[] = [PersonRole.Bride, PersonRole.Groom];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.connectedPerson = this.fb.group({
      "personRole": new FormControl(),
      "firstName": new FormControl(),
      "lastName": new FormControl(),
      "dob": new FormControl(),
    });
  }

  getRecordPersonSearch() {
    return '';
  }

  cancel() {

  }

  submit() {
    
  }
}
