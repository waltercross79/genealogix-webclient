import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { ResearchMaterialModule } from './research-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatDialogModule, MatSidenavModule, MatStepperModule } from '@angular/material';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent as RecordsHomeComponent } from './records/home/home.component';
import { ConnectPersonsDialogComponent } from './records/connect-persons/connect-persons-dialog.component';
import { FiltersComponent as RecordsFiltersComponent } from './records/filters/filters.component';
import { SearchComponent  as RecordsSearchComponent } from './records/search/search.component';
import { EditComponent as RecordsEditComponent } from './records/edit/edit.component';
import { AddComponent as RecordsAddComponent } from './records/add/add.component';
import { DetailComponent as RecordsDetailComponent } from './records/detail/detail.component';
import { DashboardComponent as RecordsDashboardComponent } from './records/dashboard/dashboard.component';
import { RecordTypePipe } from './records/services/record-type.pipe';
import { PersonRolePipe } from './records/services/person-role.pipe';
import { PersonsComponent } from './records/persons/persons.component';
import { HomeComponent as PersonsHomeComponent } from './persons/home/home.component';
import { SearchComponent  as PersonsSearchComponent } from './persons/search/search.component';
import { EditComponent as PersonsEditComponent } from './persons/edit/edit.component';
import { AddComponent as PersonsAddComponent } from './persons/add/add.component';
import { DetailComponent as PersonsDetailComponent } from './persons/detail/detail.component';
import { FiltersComponent as PersonsFiltersComponent } from './persons/filters/filters.component';
import { TreeViewerComponent } from './persons/tree-viewer/tree-viewer.component';
import { PersonRecordsComponent } from './persons/detail/person-records.component';
import { Ng8ImageViewerLibModule } from 'ng8-image-viewer';

@NgModule({
  declarations: [ResearchComponent, RecordsHomeComponent, RecordsFiltersComponent, RecordsSearchComponent, 
    RecordsEditComponent, RecordsAddComponent, RecordsDetailComponent, 
    RecordsDashboardComponent, RecordTypePipe, PersonRolePipe, PersonsComponent, ConnectPersonsDialogComponent,
    PersonsFiltersComponent, PersonsSearchComponent, PersonsHomeComponent, PersonsAddComponent, PersonsDetailComponent, 
    PersonsEditComponent,TreeViewerComponent, PersonRecordsComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,    
    ResearchMaterialModule, 
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule, FlexLayoutModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatOptionModule, MatSelectModule, 
    MatDialogModule, MatSidenavModule, MatStepperModule, 
    Ng8ImageViewerLibModule
    ],
    entryComponents: [RecordsHomeComponent, ConnectPersonsDialogComponent], })
export class ResearchModule { }
