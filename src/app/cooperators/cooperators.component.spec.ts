import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperatorsComponent } from './cooperators.component';

describe('CooperatorsComponent', () => {
  let component: CooperatorsComponent;
  let fixture: ComponentFixture<CooperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
