import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSitesComponent } from './project-sites.component';

describe('ProjectSitesComponent', () => {
  let component: ProjectSitesComponent;
  let fixture: ComponentFixture<ProjectSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
