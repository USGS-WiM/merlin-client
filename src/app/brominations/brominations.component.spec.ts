import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrominationsComponent } from './brominations.component';

describe('BrominationsComponent', () => {
  let component: BrominationsComponent;
  let fixture: ComponentFixture<BrominationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
