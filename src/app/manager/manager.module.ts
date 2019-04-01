import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [ManagerComponent, ManagerHomeComponent, UserManagementComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]
})
export class ManagerModule { }
