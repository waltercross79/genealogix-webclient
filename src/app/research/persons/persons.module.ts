import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { TreeViewerComponent } from './tree-viewer/tree-viewer.component';

@NgModule({
  declarations: [FiltersComponent, SearchComponent, HomeComponent, AddComponent, DetailComponent, EditComponent,TreeViewerComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule, FlexLayoutModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, MatSelectModule, MatOptionModule, SharedModule
  ],
  exports: [SearchComponent, AddComponent,TreeViewerComponent]
})
export class PersonsModule { }
