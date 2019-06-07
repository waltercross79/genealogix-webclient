import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { fbind } from 'q';
import { filter } from 'minimatch';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filters: FormGroup;

  @Output() selectedFilters = new EventEmitter<SearchCriteria>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildFilters();
  }

  submit() {
    this.selectedFilters.emit({
      recordDateFrom: this.filters.value.recordDateFrom,
      recordDateTo : this.filters.value.recordDateTo,
      includeBirths : this.filters.value.includeBirths,
      includeDeaths : this.filters.value.includeDeaths,
      includeMarriages : this.filters.value.includeMarriages,
      street : this.filters.value.street,
      number : this.filters.value.number,
      town : this.filters.value.town,
      country : this.filters.value.country,
      folio : this.filters.value.folio,
      registry : this.filters.value.registry,
      firstName : this.filters.value.firstName,
      lastName : this.filters.value.lastName,
    });
  }

  buildFilters() {
    this.filters = this.fb.group({
      "recordDateFrom": new FormControl(),
      "recordDateTo": new FormControl(),
      "includeBirths": new FormControl(false),
      "includeDeaths": new FormControl(true),
      "includeMarriages": new FormControl(true),
      "street": new FormControl(),
      "number": new FormControl(),
      "town": new FormControl(),
      "country": new FormControl(),
      "folio": new FormControl(),
      "registry": new FormControl(),
      "firstName": new FormControl(),
      "lastName": new FormControl(),
    })
  }
}

export interface SearchCriteria {
  recordDateFrom: Date,
  recordDateTo: Date,
  includeBirths: boolean,
  includeDeaths: boolean,
  includeMarriages: boolean,
  street: string,
  number: string,
  town: string,
  country: string,
  folio: string,
  registry: string,
  firstName: string,
  lastName: string
}
