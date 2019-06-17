import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent as PersonSearchComponent } from '../persons/search/search.component'
import { RecordResolver } from './services/record-resolve.guard';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { ConnectPersonsComponent } from './connect-persons/connect-persons.component';
import { PersonsComponent } from './persons/persons.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [  
    { path: '', component: HomeComponent },    
    { path: 'add', component: AddComponent },
    { path: 'search', component: SearchComponent },
    { path: 'edit', children: [
      { path: ':id', component: EditComponent, resolve: { record: RecordResolver } }
    ] },    
    
    { path: ':id/persons/connect', component: ConnectPersonsComponent },
    { path: ':id/persons/search', component: PersonSearchComponent },
    { path: ':id/persons', component: PersonsComponent },    
    { path: ':id', component: DetailComponent, resolve: { record: RecordResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }