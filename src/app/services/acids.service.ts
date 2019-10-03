import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Acids } from '../interfaces/acids';
import { APPSETTINGS } from '../app.settings';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AcidsService {

  constructor(private _http: Http) { }

  public getAllAcids(): Observable<Acids[]> {

    const options = new RequestOptions({
      headers: APPSETTINGS.JSON_HEADERS
    });

    return this._http.get(APPSETTINGS.ACIDS_URL + '?no_page')
    .map((response: Response) => <Acids[]>response.json())
    .catch(this.handleError);
  }

  // returns all acids by specified order, page number, and page size
  public pagingAcids(orderParams, pageNumber, pageSize): Observable<any> {

    const options = new RequestOptions({
      headers: APPSETTINGS.JSON_HEADERS
    });
    const params = new HttpParams().set('ordering', orderParams).set('page', pageNumber.toString()).set('page_size', pageSize.toString());

    return this._http.get(APPSETTINGS.ACIDS_URL, {
      headers: APPSETTINGS.JSON_HEADERS,
      params: params.toString()
    })
    .map((response: Response) => <Acids[]>response.json())
    .catch(this.handleError);
  }

  // filter data by acids code
  public filterByAcidCode(code): Observable<any> {

    const options = new RequestOptions({
      headers: APPSETTINGS.JSON_HEADERS
    });

    return this._http.get(APPSETTINGS.ACIDS_URL + '?code=' + code, {
      headers: APPSETTINGS.JSON_HEADERS,
    })
    .map((response: Response) => <Acids[]>response.json())
    .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.error(error);
    return throwError(JSON.stringify(error.json()) || 'Server error');
  }
}
