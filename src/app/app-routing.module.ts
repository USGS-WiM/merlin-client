import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataViewComponent } from './data-view/data-view.component';
import { AcidsComponent } from './acids/acids.component';
import { SampleLoginComponent } from './sample-login/sample-login.component';
import { BlankWatersComponent } from './blank-waters/blank-waters.component';
import { BottlesComponent } from './bottles/bottles.component';
import { BrominationsComponent } from './brominations/brominations.component';
import { CooperatorsComponent } from './cooperators/cooperators.component';
import { ProjectSitesComponent } from './project-sites/project-sites.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportCooperatorResultsComponent } from './report-cooperator-results/report-cooperator-results.component';
import { ReportNawqaResultsComponent } from './report-nawqa-results/report-nawqa-results.component';
import { ReportNwisSamplesComponent } from './report-nwis-samples/report-nwis-samples.component';
import { ReportNwisResultsComponent } from './report-nwis-results/report-nwis-results.component';
import { ReportProjectResultsComponent } from './report-project-results/report-project-results.component';
import { SamplesSearchComponent } from './samples-search/samples-search.component';
import { ResultsSearchComponent } from './results-search/results-search.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes =
  [
    { path: '', redirectTo: 'merlin', pathMatch: 'full' },
    { path: 'merlin', component: DataViewComponent },
    { path: 'merlin/acids', component: AcidsComponent },
    { path: 'merlin/sample-login', component: SampleLoginComponent },
    { path: 'merlin/blank-waters', component: BlankWatersComponent },
    { path: 'merlin/brominations', component: BrominationsComponent },
    { path: 'merlin/cooperators', component: CooperatorsComponent },
    { path: 'merlin/bottles', component: BottlesComponent },
    { path: 'merlin/project-sites', component: ProjectSitesComponent },
    { path: 'merlin/projects', component: ProjectsComponent },
    { path: 'merlin/report-cooperator-results', component: ReportCooperatorResultsComponent },
    { path: 'merlin/report-nawqa-results', component: ReportNawqaResultsComponent },
    { path: 'merlin/report-nwis-results', component: ReportNwisResultsComponent },
    { path: 'merlin/report-nwis-samples', component: ReportNwisSamplesComponent },
    { path: 'merlin/report-projects-results', component: ReportProjectResultsComponent },
    { path: 'merlin/samples-search', component: SamplesSearchComponent },
    { path: 'merlin/results-search', component: ResultsSearchComponent },
    { path: 'merlin/sites', component: SitesComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
