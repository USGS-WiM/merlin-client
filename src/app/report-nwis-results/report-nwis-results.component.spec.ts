import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNwisResultsComponent } from './report-nwis-results.component';

describe('ReportNwisResultsComponent', () => {
  let component: ReportNwisResultsComponent;
  let fixture: ComponentFixture<ReportNwisResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNwisResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNwisResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
