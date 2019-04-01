import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, /* matching empty path requires full match instead of the default - prefix */
  { path: 'home', component: HomeComponent },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
  { path: 'genealogist', loadChildren: './genealogist/genealogist.module#GenealogistModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '**', component: PageNotFoundComponent } /* any route that is not matched */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
