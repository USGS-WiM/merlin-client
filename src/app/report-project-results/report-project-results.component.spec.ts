import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProjectResultsComponent } from './report-project-results.component';

describe('ReportProjectResultsComponent', () => {
  let component: ReportProjectResultsComponent;
  let fixture: ComponentFixture<ReportProjectResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProjectResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProjectResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
