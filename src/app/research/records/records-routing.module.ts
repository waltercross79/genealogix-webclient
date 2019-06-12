import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecordResolver } from './services/record-resolve.guard';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [  
    { path: '', component: HomeComponent },    
    { path: 'search', component: SearchComponent },
    { path: 'edit', children: [
      { path: ':id', component: EditComponent, resolve: { record: RecordResolver } }
    ] },
    { path: ':id', component: DetailComponent, resolve: { record: RecordResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }