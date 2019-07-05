import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research.component';
import { HomeComponent as RecordsHomeComponent } from './records/home/home.component';
import { SearchComponent  as RecordsSearchComponent } from './records/search/search.component';
import { EditComponent as RecordsEditComponent } from './records/edit/edit.component';
import { AddComponent as RecordsAddComponent } from './records/add/add.component';
import { DetailComponent as RecordsDetailComponent } from './records/detail/detail.component';
import { HomeComponent as PersonsHomeComponent } from './persons/home/home.component';
import { SearchComponent  as PersonsSearchComponent } from './persons/search/search.component';
import { EditComponent as PersonsEditComponent } from './persons/edit/edit.component';
import { AddComponent as PersonsAddComponent } from './persons/add/add.component';
import { DetailComponent as PersonsDetailComponent } from './persons/detail/detail.component';

import { RecordResolver } from './records/services/record-resolve.guard';
import { PersonDeepResolver } from './persons/services/person-resolve-deep.guard';
import { PersonResolver } from './persons/services/person-resolve.guard';


const routes: Routes = [
  { path: '', component: ResearchComponent, children: [    
    { path: 'persons', component: PersonsHomeComponent, children: [
      { path: 'search', component: PersonsSearchComponent },
      { path: 'add', component: PersonsAddComponent },
      { path: 'edit', children: [
        { path: ':id', component: PersonsEditComponent, resolve:{ person: PersonResolver } }
      ]},
      { path: ':id', component: PersonsDetailComponent, resolve:{ person: PersonDeepResolver } }
    ]},
    { path: 'records', component: RecordsHomeComponent, children: [    
      { path: 'add', component: RecordsAddComponent },
      { path: 'search', component: RecordsSearchComponent },
      { path: 'edit', children: [
        { path: ':id', component: RecordsEditComponent, resolve: { record: RecordResolver } }
      ] },        
      { path: ':id', component: RecordsDetailComponent, resolve: { record: RecordResolver } }
    ]}    
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
