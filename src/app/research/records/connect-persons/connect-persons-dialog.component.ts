import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConnectPersonsComponent } from './connect-persons.component';
import { PersonInRecord, Record } from '../services/models';

@Component({
  selector: 'app-connect-persons-dialog',
  template: `
      <h2 mat-dialog-title>Add Person to Record</h2>
      <mat-dialog-content>
        <app-connect-persons [record]="data" (connected)="onPersonConnected($event)"></app-connect-persons>
      </mat-dialog-content>
      <mat-dialog-actions>
        <span class="flex-spacer"></span>
        <button mat-button mat-dialog-close>Close</button>   
        <button
            mat-button
            mat-button-raised
            color="primary"
            [mat-dialog-close]="pir"
            cdkFocusInitial>
            Submit
          </button>         
      </mat-dialog-actions>  
      `,
  styles: []
})
export class ConnectPersonsDialogComponent {

  pir: PersonInRecord;

  constructor(
    public dialogRef: MatDialogRef<ConnectPersonsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Record) { }

  cancel(): void {
    this.dialogRef.close();
  }

  onPersonConnected(personInRecord: PersonInRecord){
    this.pir = personInRecord;
  }
}
