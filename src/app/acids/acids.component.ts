import { Component, OnInit } from '@angular/core';
import { APPSETTINGS } from '../app.settings';
import { AcidsService } from '../services/acids.service';
import { Acids } from '../interfaces/acids';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.scss']
})
export class AcidsComponent implements OnInit {
  acidsresults: any;
  test;

  constructor(
    private acidsService: AcidsService
  ) {
  }

  ngOnInit() {
    this.acidsService.getAllAcids()
      .subscribe(
        acidsresults => {
        this.acidsresults = acidsresults;
        console.log(this.acidsresults);
        this.test = this.acidsresults.results;
        console.log(this.test);
      });
  }

}
