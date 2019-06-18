import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, /* matching empty path requires full match instead of the default - prefix */
  { path: 'home', component: HomeComponent },
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule), canLoad: [AuthGuard] },
  { path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule), canLoad: [AuthGuard], canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent } /* any route that is not matched */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
