import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatInputModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MaterialModule,
    MatInputModule, MatCheckboxModule, MatFormFieldModule
  ]
})
export class ResearchMaterialModule { }