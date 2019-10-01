import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { Acids } from '../interfaces/acids';
import { APPSETTINGS } from '../app.settings';

@Injectable()
export class AcidsService {

  constructor(private _http: Http) { }

  public getAllAcids(): Observable<Acids[]> {

    const options = new RequestOptions({
      headers: APPSETTINGS.JSON_HEADERS
    });

    return this._http.get(APPSETTINGS.ACIDS_URL)
    .map((response: Response) => <Acids[]>response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return throwError(JSON.stringify(error.json()) || 'Server error');
  }
}
