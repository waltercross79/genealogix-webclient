import { Component, OnInit, ViewChild } from '@angular/core';
import { Record, RegistryRecord } from '../services/models';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/common/ui.service';
import { Router } from '@angular/router';
import { ConnectPersonsDialogComponent } from '../connect-persons/connect-persons-dialog.component';
import { MatDialog } from '@angular/material';
import { RecordsService } from '../services/records.service';
import { PersonService } from '../../persons/services/person.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add.component.html',
  styles: [`
  mat-sidenav {
    width: 600px;
  }
  `]
})
export class AddComponent implements OnInit {

  record: Record;
  editor: FormGroup;
  @ViewChild('file', { static: true }) file;
  @ViewChild('viewer', { static: true }) viewer;
  @ViewChild('persons', { static: true }) persons;
  images: string[] = [];
  recordTypeControl: FormControl = new FormControl('', [Validators.required]);
  recordDateControl: FormControl = new FormControl('', [Validators.required]);
  hasImage: boolean = false;
  recordDetailsForm: FormGroup;
  fileForm: FormGroup;

  constructor(private uiService: UiService, private router: Router,
    private fb: FormBuilder, public dialog: MatDialog, 
    private recordsService: RecordsService, private personService: PersonService) { 
    this.record = new RegistryRecord();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    this.fileForm = this.fb.group({
      "path": new FormControl()
    });

    this.recordDetailsForm = this.fb.group({
      "recordDate": this.recordDateControl,
      "recordType": this.recordTypeControl,
      "street": new FormControl(this.record.street),
      "number": new FormControl(this.record.number),
      "town": new FormControl(this.record.town),
      "country": new FormControl(this.record.country),
      "folio": new FormControl(this.record.folio),
      "registry": new FormControl(this.record.registry)
    });

    this.editor = this.fb.group({
      formArray: this.fb.array([
      this.fileForm,
      this.recordDetailsForm
      ])
    });

    this.recordTypeControl.valueChanges.subscribe(val => {
      this.record.recordType = val;
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

  fileOpenDialog() {
    this.file.nativeElement.click();
  }

  onFileSelected() {    
    let fileReader = new FileReader();
    fileReader.onload = (e) => {      
      this.images = [(fileReader.result as string).replace(/data:.*;base64,/g, '')];
      this.hasImage = true;         
    }
    fileReader.readAsDataURL(this.file.nativeElement.files[0]);
  }

  submit() {
    this.recordsService.create(new RegistryRecord(
      this.recordDetailsForm.value.recordDate,
      this.recordDetailsForm.value.recordType,
      null,
      this.recordDetailsForm.value.number,
      this.recordDetailsForm.value.street,
      this.recordDetailsForm.value.town,
      this.recordDetailsForm.value.country,
      this.recordDetailsForm.value.folio,
      this.recordDetailsForm.value.registry,
      this.record.persons,
      this.getImage()
    )).subscribe(r => {
      this.router.navigate(['/', 'research', 'records', r.id]);
    },
    error => {
      this.uiService.showToast(error);
    });
  }

  showConnectPerson() {
    this.doShowConnectPerson('create');
  }

  showCreatePerson() {
    this.doShowConnectPerson('find');
  }

  private doShowConnectPerson(mode: string) {
    let dialogRef = this.dialog.open(ConnectPersonsDialogComponent, {
      data: { record: this.record, mode: mode },
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(pir => {
      if(pir) {
        this.record.persons.push(pir);
        this.persons.setData(this.record.persons);
      }
    });
  }

  private getImage(): Blob {
    let byteChars = atob(this.images[0]);
    let byteNums =new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNums[i] = byteChars.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNums);
    return new Blob([byteArray]);
  }
}