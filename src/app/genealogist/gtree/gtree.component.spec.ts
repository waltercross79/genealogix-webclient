import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtreeComponent } from './gtree.component';

describe('PersonsComponent', () => {
  let component: GtreeComponent;
  let fixture: ComponentFixture<GtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
