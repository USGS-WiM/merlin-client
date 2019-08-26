import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidsComponent } from './acids.component';

describe('AcidsComponent', () => {
  let component: AcidsComponent;
  let fixture: ComponentFixture<AcidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
