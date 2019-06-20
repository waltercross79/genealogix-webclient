import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/common/ui.service';
import { Router } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  editor: FormGroup;

  constructor(private fb: FormBuilder,
    private uiService: UiService, private router: Router,
    private personService: PersonService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editor = this.fb.group({
      "firstName": new FormControl('', [Validators.required]),
      "lastName": new FormControl('', [Validators.required]),
      "middleName": new FormControl(''),
      "gender": new FormControl(''),
      "dob": new FormControl(''),
      "dod": new FormControl('')
    });
  }

  cancel() {
    if(this.editor.dirty) {
      this.uiService.showDialog("Confirmation", "All changes will be discarded. Do you want to continue?", 
      "Yes", "No").subscribe((confirmed) => {
        if(confirmed) {
          this.navigateToSearch();
        }
      });
    } else {
      this.navigateToSearch();
    } 
  }

  navigateToSearch() {
    this.router.navigate(['/research/persons/search']);
  }

  submit() {
    this.personService.create({
      id: 0,
      firstName: this.editor.value.firstName,
      lastName: this.editor.value.lastName,
      middleName: this.editor.value.middleName,
      gender: this.editor.value.gender,
      dateOfBirth: this.editor.value.dob,
      dateOfDeath: this.editor.value.dod
    }).subscribe(p => {
      this.uiService.showToast('Person created successfully!');
      this.router.navigate(['/', 'research', 'persons', p.id]);
    }, error => {
      this.uiService.showToast(error);
    });
  }

}
