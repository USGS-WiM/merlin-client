import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesSearchComponent } from './samples-search.component';

describe('SamplesSearchComponent', () => {
  let component: SamplesSearchComponent;
  let fixture: ComponentFixture<SamplesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
