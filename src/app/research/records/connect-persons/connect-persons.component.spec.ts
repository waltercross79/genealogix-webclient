import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectPersonsComponent } from './connect-persons.component';

describe('ConnectPersonsComponent', () => {
  let component: ConnectPersonsComponent;
  let fixture: ComponentFixture<ConnectPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
