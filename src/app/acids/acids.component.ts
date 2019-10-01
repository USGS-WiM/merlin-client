import { Component, OnInit } from '@angular/core';
import { APPSETTINGS } from '../app.settings';
import { AcidsService } from '../services/acids.service';
import { Acids } from '../interfaces/acids';
// import * as Handsontable from 'handsontable';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.scss']
})
export class AcidsComponent implements OnInit {
  acidsResults: any;
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
    this.acidsService.getAllAcids()
      .subscribe(
        acidsresults => {
          this.acidsResults = acidsresults;
          this.acidsResults = this.acidsResults.results;
        });
  }

}
