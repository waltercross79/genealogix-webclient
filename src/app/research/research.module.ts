import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { GtreeModule } from './gtree/gtree.module';
import { RecordsModule } from './records/records.module';
import { ResearchMaterialModule } from './research-material.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonsModule } from './persons/persons.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ResearchComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    GtreeModule,
    RecordsModule,
    ResearchMaterialModule, 
    CommonModule, PersonsModule, SharedModule  ]})
export class ResearchModule { }
