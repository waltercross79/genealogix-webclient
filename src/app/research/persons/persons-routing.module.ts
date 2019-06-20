import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { PersonResolver } from './services/person-resolve.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add', component: AddComponent },
  { path: ':id', component: DetailComponent, resolve:{ person: PersonResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
