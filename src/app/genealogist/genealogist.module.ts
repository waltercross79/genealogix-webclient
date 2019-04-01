import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenealogistRoutingModule } from './genealogist-routing.module';
import { RecordsComponent } from './records/records.component';
import { GenealogistComponent } from './genealogist.component';
import { GtreeComponent } from './gtree/gtree.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [RecordsComponent, GenealogistComponent, GtreeComponent],
  imports: [
    CommonModule,
    GenealogistRoutingModule,
    MaterialModule
  ]
})
export class GenealogistModule { }
