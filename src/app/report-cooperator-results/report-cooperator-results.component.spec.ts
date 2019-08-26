import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCooperatorResultsComponent } from './report-cooperator-results.component';

describe('ReportCooperatorResultsComponent', () => {
  let component: ReportCooperatorResultsComponent;
  let fixture: ComponentFixture<ReportCooperatorResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCooperatorResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCooperatorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
