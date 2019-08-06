import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { SideNavService } from '../shared/menu/sidenav.service';

@Component({
  selector: 'app-home',
  styles: [`
  div[fxLayout] {margin-top: 32px;}
  `],
  template: `
  <div *ngIf="displayLogin">
    <app-login></app-login>
  </div>
  <div *ngIf="!displayLogin">
    <mat-toolbar>
      <a mat-raised-button routerLink="/research" color="accent">Research</a>
    </mat-toolbar>
    <div>
      <h2 class="mat-h2">Welcome to Genealogix!</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nisi ac lacus imperdiet pellentesque. In nec est velit. Fusce in iaculis mi. Aliquam aliquam dictum tellus. Nulla dui velit, maximus posuere scelerisque sollicitudin, consectetur nec enim. Phasellus eget arcu tortor. Cras accumsan dignissim interdum. Etiam ultricies mattis sapien, sed euismod tortor eleifend auctor. In hac habitasse platea dictumst. Curabitur at porttitor nulla. Nulla elit sapien, blandit ac leo sit amet, malesuada euismod nisl. Pellentesque cursus erat ac tempus facilisis. Etiam et tortor id est pretium tempor at eget eros. Sed tincidunt quam eget viverra malesuada. Donec pulvinar vel nisi eget efficitur.

Nullam vel ullamcorper ipsum, vitae vulputate mi. Praesent tempor magna ipsum, vitae pulvinar lorem faucibus nec. Nam suscipit volutpat neque, at dignissim lorem euismod nec. Duis bibendum ultrices lacus, id accumsan dui maximus sed. Pellentesque blandit sed metus vitae volutpat. Aliquam vel interdum risus. Proin eu feugiat nulla. Vivamus porttitor eleifend justo, in maximus odio accumsan in. Nulla facilisi. Aliquam ac porttitor lacus, id sollicitudin erat. Cras dignissim suscipit nibh, et luctus sem consequat laoreet. Praesent accumsan, diam sed porta suscipit, est tortor ullamcorper dui, et pharetra ante lacus et velit.

Ut congue enim eget tempor iaculis. Quisque nec dignissim est. Nulla sapien leo, ultricies id est nec, dictum bibendum nisl. Aliquam ultrices, tellus sed suscipit semper, tellus nunc sollicitudin ligula, sed ullamcorper felis augue ac est. Sed vel libero vitae arcu suscipit accumsan in ut dui. Sed nisi purus, feugiat ac laoreet tincidunt, maximus faucibus nunc. Ut a arcu mauris.

Sed maximus arcu at enim tincidunt finibus. Curabitur ut tortor ut purus eleifend consequat nec eget enim. Donec ornare mauris nec rhoncus aliquet. Fusce odio turpis, varius vitae laoreet eu, accumsan nec lacus. Morbi bibendum massa vitae purus ultrices dictum. Nam eleifend lectus vel lectus euismod, ac vestibulum nisi ultrices. Fusce vitae tellus diam. Nullam sapien nulla, aliquet id eleifend ut, feugiat eu felis. Vestibulum vitae faucibus ipsum, non suscipit magna. Morbi eget ante viverra, gravida sem sed, accumsan turpis. Aliquam et enim non mi vulputate commodo a a quam.

Donec maximus, augue at vestibulum tempus, libero tellus suscipit arcu, sit amet mollis felis ipsum at urna. Etiam mattis tempor varius. Duis dictum, lacus interdum tincidunt euismod, lacus nisl lobortis lacus, a suscipit nibh leo et ligula. Praesent id laoreet ante. Aenean rhoncus tincidunt magna. Nullam sollicitudin augue non nulla aliquet feugiat. Vivamus imperdiet eleifend lacus, laoreet pharetra turpis eleifend in. Praesent tincidunt turpis non urna porta condimentum. Pellentesque tempor est in pharetra scelerisque. In hac habitasse platea dictumst. Integer facilisis odio quis ex vestibulum, quis scelerisque velit ultricies. Cras lacinia nec leo et rutrum.
      </p>
    </div>
  </div>  
  `
})
export class HomeComponent implements OnInit {

  _displayLogin:boolean = true;
  
  get displayLogin() {
    return this._displayLogin;
  }

  constructor(private authService: AuthService, private sidenavService: SideNavService) { }

  ngOnInit() {
    this.authService.authStatus
      .subscribe(s => {
        this._displayLogin = !s.isAuthenticated;

        if(s.isAuthenticated) {
          this.sidenavService.changeMenu([
            { header: 'Genealogix Home', items: [
              { text: 'Research', url: '/research', icon: 'image_search'},
            ]}
          ]);
        } else {
          this.sidenavService.changeMenu([
            { header: 'Genealogix Home', items: [
              { text: 'Login', url: '/login', icon: ''},
            ]}
          ]);
        }        
      });    
  }
}
