import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogistComponent } from './genealogist.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';


describe('GenealogistComponent', () => {
  let component: GenealogistComponent;
  let fixture: ComponentFixture<GenealogistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogistComponent ],
      imports: [ MaterialModule, HttpClientModule, AppRoutingModule, BrowserModule, RouterTestingModule, AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
