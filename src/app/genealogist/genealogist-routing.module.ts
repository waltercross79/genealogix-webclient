import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { GtreeComponent } from './gtree/gtree.component';
import { GenealogistComponent } from './genealogist.component';

const routes: Routes = [
  { path: '', component: GenealogistComponent, children: [
    { path: '', redirectTo: 'gtree', pathMatch: 'full' },
    { path: 'records', component: RecordsComponent },
    { path: 'gtree', component: GtreeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenealogistRoutingModule { }
