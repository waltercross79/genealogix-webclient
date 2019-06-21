import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from 'src/app/common/data.service';

const PERSON_FILTERS_ITEM = "PERSON_FILTERS_ITEM";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: []
})
export class FiltersComponent implements OnInit {

  filters: FormGroup;
  @Input() showCancelButton: boolean = false;
  @Output() selected = new EventEmitter<SearchCriteria>();
  @Output() cancelled = new EventEmitter<boolean>();
  
  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    let lastSearch = this.dataService.data[PERSON_FILTERS_ITEM];

    if(lastSearch) {
      this.filters = lastSearch;
      this.setFilters();
    } else {
      this.filters = this.fb.group({
        "dobFrom": new FormControl(),
        "dobTo": new FormControl(),
        "dodFrom": new FormControl(),
        "dodTo": new FormControl(),

        "firstName": new FormControl(),
        "lastName": new FormControl(),

        "gender": new FormControl(''),
      });      
    }
  }
  
  cancel() {
    this.cancelled.emit(true);
  }

  submit() {
    this.dataService.data[PERSON_FILTERS_ITEM] = this.filters;
    
    this.setFilters();
  }

  setFilters() {
    this.selected.emit({
      dobFrom: this.filters.value.dobFrom,
      dobTo: this.filters.value.dobTo,
      dodFrom: this.filters.value.dodFrom,
      dodTo: this.filters.value.dodTo,
      firstName: this.filters.value.firstName,
      lastName: this.filters.value.lastName,
      isMale: this.filters.value.isMale,
      isFemale: this.filters.value.isFemale      
    });
  }
}

export interface SearchCriteria {
  dobFrom: Date;
  dobTo: Date;
  dodFrom: Date;
  dodTo: Date;
  firstName: String;
  lastName: String;
  isMale: boolean;
  isFemale: boolean;
}