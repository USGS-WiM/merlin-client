import { Component, OnInit } from '@angular/core';
import { APPSETTINGS } from '../app.settings';
import { AcidsService } from '../services/acids.service';
import { Acids } from '../interfaces/acids';
// import * as Handsontable from 'handsontable';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { catchError, finalize } from 'rxjs/operators';
import { Subject, interval, of, fromEvent, pipe} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { AjaxResponse } from 'rxjs/ajax'
import { map, debounceTime, switchMap, mergeMap, timeout } from 'rxjs/operators';


@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.scss']
})
export class AcidsComponent implements OnInit {
  acidsResults: any;
  currentPage = 1;
  pageSize = 100;
  nextPage;
  // dataSource: AcidsDataSource;
  codeSearch;
  hotInstance;
  displayedResults;

  hotSettings: Handsontable.GridSettings = {
    colHeaders: true,
    licenseKey: 'non-commercial-and-evaluation',
    manualColumnResize: true,
    manualRowResize: true,
    columns: [
      { title: 'ID', data: 'id', readOnly: true, width: 1 },
      { title: 'Code', data: 'code', width: 120 },
      { title: 'Concentration', data: 'concentration', width: 120 },
      { title: 'Date', data: 'created_date', width: 100, dateFormat: 'MM/DD/YY', datePickerConfig: { maxDate: new Date() } },
      { title: 'Comment', data: 'comment', width: 300 }
    ],
  };

  constructor(
    private acidsService: AcidsService
  ) { }

  ngOnInit() {
    /* this.acidsService.getAllAcids()
    .subscribe(
      acidsresults => {
        this.acidsResults = acidsresults;
        this.acidsResults = this.acidsResults;
      }); */

    this.acidsService.pagingAcids('', '1', '100')
      .subscribe(
        acidsresults => {
          this.acidsResults = acidsresults;
          this.acidsResults = this.acidsResults.results;
        });
  }

  loadNextPageOfData() {
    this.currentPage = this.currentPage + 1;
    if (this.currentPage === 0) {
      this.currentPage = 1;
      return;
    } else {
      this.acidsService.pagingAcids('', this.currentPage, '100')
        .subscribe(
          acidsresults => {
            this.acidsResults = acidsresults;
            this.acidsResults = this.acidsResults.results;
          });
      console.log(this.currentPage + ' = currentPage');
    }
  }

  loadPreviousPageOfData() {
    this.currentPage = this.currentPage - 1;

    // catching the user if they try to load past 0 and setting the current page to 1
    if (this.currentPage === 0) {
      this.currentPage = 1;
      return;
    } else {
      this.acidsService.pagingAcids('', this.currentPage, '100')
        .subscribe(
          acidsresults => {
            this.acidsResults = acidsresults;
            this.acidsResults = this.acidsResults.results;
          });
      console.log(this.currentPage + ' = currentPage');
    }
  }

  reloadTable() {
    // need to set up
  }

  addNewAcid(code) {

  }


}
