import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonRole } from '../services/models';
import { Router, ActivatedRoute } from '@angular/router';

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

  connectedPerson: FormGroup;
  personRoles: PersonRole[] = [];
  id: number;

  constructor(private fb: FormBuilder, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.connectedPerson = this.fb.group({
      "personRole": new FormControl(),
      "firstName": new FormControl(),
      "lastName": new FormControl(),
      "dob": new FormControl(),
    });
  }

  getRecordPersonSearch() {
    return `/research/records/${this.id}/persons/search`;
  }

  cancel() {
    // navigate to record edit screen
    this.router.navigate([
      `/research/records/edit/${this.id}`
    ])
  }

  submit() {
    
  }
}
