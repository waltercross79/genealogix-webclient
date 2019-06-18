import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AdministratorModule } from './administrator/administrator.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiService } from './common/ui.service';
import { SimpleDialogComponent } from './common/simple-dialog.component';
import { DataService } from './common/data.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimpleDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    AdministratorModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    UserModule
  ],
  entryComponents: [HomeComponent, SimpleDialogComponent],
  exports: [HomeComponent],
  bootstrap: [AppComponent],
  providers: [UiService, DataService]
})
export class AppModule { }
