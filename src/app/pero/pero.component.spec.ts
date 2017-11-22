import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeroComponent } from './pero.component';

describe('PeroComponent', () => {
  let component: PeroComponent;
  let fixture: ComponentFixture<PeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
