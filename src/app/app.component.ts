import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',  
})
export class AppComponent {
  title = 'GeneaTool';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'family_tree',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/family_tree.svg?v=1')
    )
  }
}

