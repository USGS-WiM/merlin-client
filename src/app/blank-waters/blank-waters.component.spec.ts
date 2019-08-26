import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankWatersComponent } from './blank-waters.component';

describe('BlankWatersComponent', () => {
  let component: BlankWatersComponent;
  let fixture: ComponentFixture<BlankWatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankWatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankWatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
