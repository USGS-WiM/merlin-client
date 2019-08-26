import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSearchComponent } from './results-search.component';

describe('ResultsSearchComponent', () => {
  let component: ResultsSearchComponent;
  let fixture: ComponentFixture<ResultsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
