import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataViewComponent } from './data-view/data-view.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBottomSheetModule,
  MatStepperModule
} from '@angular/material';

import { SampleLoginComponent } from './sample-login/sample-login.component';
import { SamplesSearchComponent } from './samples-search/samples-search.component';
import { ResultsSearchComponent } from './results-search/results-search.component';
import { BottlesComponent } from './bottles/bottles.component';
import { AcidsComponent } from './acids/acids.component';
import { BrominationsComponent } from './brominations/brominations.component';
import { BlankWatersComponent } from './blank-waters/blank-waters.component';
import { CooperatorsComponent } from './cooperators/cooperators.component';
import { ProjectsComponent } from './projects/projects.component';
import { SitesComponent } from './sites/sites.component';
import { ProjectSitesComponent } from './project-sites/project-sites.component';
import { ReportProjectResultsComponent } from './report-project-results/report-project-results.component';
import { ReportNawqaResultsComponent } from './report-nawqa-results/report-nawqa-results.component';
import { ReportNwisSamplesComponent } from './report-nwis-samples/report-nwis-samples.component';
import { ReportNwisResultsComponent } from './report-nwis-results/report-nwis-results.component';
import { ReportCooperatorResultsComponent } from './report-cooperator-results/report-cooperator-results.component';

// Services
import { AcidsService } from './services/acids.service';
import { AuthenticationService } from './services/authentication.service';
import { SidebarService } from './services/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SidebarComponent,
    DataViewComponent,
    AboutComponent,
    SampleLoginComponent,
    SamplesSearchComponent,
    ResultsSearchComponent,
    BottlesComponent,
    AcidsComponent,
    BrominationsComponent,
    BlankWatersComponent,
    CooperatorsComponent,
    ProjectsComponent,
    SitesComponent,
    ProjectSitesComponent,
    ReportProjectResultsComponent,
    ReportNawqaResultsComponent,
    ReportNwisSamplesComponent,
    ReportNwisResultsComponent,
    ReportCooperatorResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatStepperModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    SidebarService,
    AcidsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
