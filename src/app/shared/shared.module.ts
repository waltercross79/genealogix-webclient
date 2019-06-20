import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './gender.pipe';
import { SideNavComponent } from './menu/sidenav.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GenderPipe, SideNavComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  exports: [GenderPipe, SideNavComponent]
})
export class SharedModule { }
