import { NgModule } from '@angular/core';
import { RecordsRoutingModule } from './records-routing.module';
import { HomeComponent } from './home/home.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewerComponent } from './viewer/viewer.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, 
  MatInputModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, 
  MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecordTypePipe } from './services/record-type.pipe';

@NgModule({
  declarations: [HomeComponent, FiltersComponent, SearchComponent, 
    EditComponent, AddComponent, ViewerComponent, DetailComponent, 
    DashboardComponent, SidenavComponent, RecordTypePipe],
  imports: [
    RecordsRoutingModule, ReactiveFormsModule, CommonModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule, FlexLayoutModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule ],
  entryComponents: [HomeComponent],  
})
export class RecordsModule { }
