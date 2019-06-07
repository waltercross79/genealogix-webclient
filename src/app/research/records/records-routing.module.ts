import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [  
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }