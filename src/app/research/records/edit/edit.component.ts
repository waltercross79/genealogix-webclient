import { Component, OnInit, ViewChild } from '@angular/core';
import { Record, RegistryRecord, PersonInRecord } from '../services/models';
import { RecordsService } from '../services/records.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/common/ui.service';
import { MatDialog } from '@angular/material';
import { ConnectPersonsDialogComponent } from '../connect-persons/connect-persons-dialog.component';
import { PersonService } from '../../persons/services/person.service';

@Component({
  selector: 'app-edit-records',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  record: Record;
  id: string;
  editor: FormGroup;
  recordDateControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  recordTypeControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  @ViewChild('people', { static: true} ) people;

  constructor(private recordsService: RecordsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private uiService: UiService,
    public dialog: MatDialog,
    private personService: PersonService) { }

  ngOnInit() {
    // get record from resolve guard result
    this.route.data.subscribe((data: { record: Record}) => {
      this.record = data.record;
      this.id = data.record.id;
      this.buildEditor();      
    }, error => { console.log(error); });    
  }

  buildEditor() {
    this.recordDateControl.setValue(this.record.recordDate ? 
      new Date(this.record.recordDate.getFullYear(), 
        this.record.recordDate.getMonth(), 
        this.record.recordDate.getDay()) : null);
    this.recordTypeControl.setValue(this.record.recordType.toString());

    this.editor = this.fb.group({
      "recordDate": this.recordDateControl,
      "recordType": this.recordTypeControl,
      "street": new FormControl(this.record.street),
      "number": new FormControl(this.record.number),
      "town": new FormControl(this.record.town),
      "country": new FormControl(this.record.country),
      "folio": new FormControl(this.record.folio),
      "registry": new FormControl(this.record.registry)
    });

    this.recordTypeControl.valueChanges.subscribe(val => {
      this.record.recordType = val;
    });
  }

  submit() {
    console.log('About to send data to the service.')
    console.log(this.editor);

    this.recordsService.save(new RegistryRecord(
      this.editor.value.recordDate, this.editor.value.recordType,
      this.editor.value.id, this.editor.value.number, this.editor.value.street,
      this.editor.value.town, this.editor.value.country, this.editor.value.folio,
      this.editor.value.registry, this.record.persons, null, this.record.imageIdentifiers))
      .subscribe((r: Record | string) => {
        if(typeof(r) === 'string') {
          // There was an error saving. Show the error in toast.
          this.uiService.showToast(r);
        } else {
          this.uiService.showToast('Record saved successfully!');
          this.router.navigate(['/research/records/' + r.id])
        }      
      }, error => {
        this.uiService.showToast(error);
      });
  }

  cancel() {
    console.log('Leaving here...');    

    if(this.editor.dirty) {
      this.uiService.showDialog("Confirmation", "All changes will be discarded. Do you want to continue?", 
      "Yes", "No").subscribe((confirmed) => {
        if(confirmed) {
          this.navigateToSearch();
        }
      });
    } else {
      this.navigateToSearch();
    } 
  }

  navigateToSearch() {
    this.router.navigate(['/research/records/search']);
  }

  showConnectPerson() {
    this.doShowConnectPerson('create');
  }

  showCreatePerson() {
    this.doShowConnectPerson('find');
  }

  removeConnectPerson(pir: PersonInRecord) {
    if(pir) {
      let index = this.record.persons.indexOf(pir);
      if(index >= 0) {
        this.record.persons.splice(index, 1);
        this.people.setData(this.record.persons);
      }
    }
  }

  private doShowConnectPerson(mode: string) {
    let dialogRef = this.dialog.open(ConnectPersonsDialogComponent, {
      data: { record: this.record, mode: mode },
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(pir => {
      if(pir) {
        this.record.persons.push(pir);
        this.people.setData(this.record.persons);
      }
    });
  }
}
