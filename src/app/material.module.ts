import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, 
  MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, 
    MatSidenavModule, MatFormFieldModule, MatInputModule,
    MatDialogModule, MatSnackBarModule
  ]
})
export class MaterialModule { }
