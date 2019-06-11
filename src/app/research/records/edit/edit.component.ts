import { Component, OnInit } from '@angular/core';
import { Record, RecordType } from '../services/models';
import { RecordsService } from '../services/records.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  record: Record;
  id: number;
  editor: FormGroup;
  recordDateControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  recordTypeControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private recordsService: RecordsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private uiService: UiService) { }

  ngOnInit() {
    // get record from resolve guard result
    this.route.data.subscribe((data: { record: Record}) => {
      this.record = data.record;
      this.id = data.record.id;
      this.buildEditor();      
    });    
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
  }

  submit() {
    console.log('About to send data to the service.')
    console.log(this.editor);
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
}
