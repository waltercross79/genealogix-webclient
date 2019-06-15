import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltersComponent, SearchComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule, FlexLayoutModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class PersonsModule { }
