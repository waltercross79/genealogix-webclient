import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectPersonsDialogComponent } from './connect-persons-dialog.component';

describe('ConnectPersonsDialogComponent', () => {
  let component: ConnectPersonsDialogComponent;
  let fixture: ComponentFixture<ConnectPersonsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectPersonsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectPersonsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
