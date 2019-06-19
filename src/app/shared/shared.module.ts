import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringDatePipe } from './string-date.pipe';
import { SideNavComponent } from './menu/sidenav.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StringDatePipe, SideNavComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  exports: [StringDatePipe, SideNavComponent]
})
export class SharedModule { }
