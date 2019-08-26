import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNawqaResultsComponent } from './report-nawqa-results.component';

describe('ReportNawqaResultsComponent', () => {
  let component: ReportNawqaResultsComponent;
  let fixture: ComponentFixture<ReportNawqaResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNawqaResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNawqaResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
