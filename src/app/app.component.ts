import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  styles: [`
    div[fxLayout] {margin-top: 32px;}
  `],
  template: `
  <div class="wrapper">
  <div class="header">  
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <button mat-button><mat-icon>menu</mat-icon></button>      
      <a mat-button routerLink="/home"><mat-icon svgIcon="family_tree"></mat-icon><span fxStyle="h2">GeneaTool</span></a>
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile"><mat-icon>account_circle</mat-icon></button>
      <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout" aria-label="Logout"><mat-icon>lock_open</mat-icon></button>
    </mat-toolbar>
  </div>
  <div class="content">
    <router-outlet></router-outlet>
  </div>
  <div class="footer">
    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
      title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </div>
  </div>
  </div>
  `,  
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

