import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Person } from '../services/models';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  person: Person;
  editor: FormGroup;

  constructor(private router: Router, private personService: PersonService,
    private route: ActivatedRoute, private fb: FormBuilder, private uiService: UiService) { }

  ngOnInit() {
    this.route.data.subscribe(d => {
      this.person = d.person;
      this.buildForm();
    });    
  }

  buildForm() {
    this.editor = this.fb.group({
      "firstName": new FormControl(this.person.firstName, [Validators.required]),
      "lastName": new FormControl(this.person.lastName, [Validators.required]),
      "middleName": new FormControl(this.person.middleName),
      "gender": new FormControl(this.person.gender),
      "dob": new FormControl(this.person.dateOfBirth),
      "dod": new FormControl(this.person.dateOfDeath)
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
    this.personService.save({
      id: this.person.id,
      firstName: this.editor.value.firstName,
      lastName: this.editor.value.lastName,
      middleName: this.editor.value.middleName,
      gender: this.editor.value.gender,
      dateOfBirth: this.editor.value.dob,
      dateOfDeath: this.editor.value.dod,
      marriages: []
    }).subscribe(p => {
      this.uiService.showToast('Person created successfully!');
      this.router.navigate(['/', 'research', 'persons', p.id]);
    }, error => {
      this.uiService.showToast(error);
    });
  }

}
