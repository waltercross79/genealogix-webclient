import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research.component';

const routes: Routes = [
  { path: '', component: ResearchComponent, children: [    
    { path: 'records', loadChildren: () => import('./records/records.module').then(m => m.RecordsModule) },
    { path: 'persons', loadChildren: () => import('./persons/persons.module').then(m => m.PersonsModule) },
    { path: 'gtree', loadChildren: () => import('./gtree/gtree.module').then(m => m.GtreeModule) }    
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
