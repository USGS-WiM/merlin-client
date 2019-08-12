import { Injectable, Output } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/observable/of';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { APPSETTINGS } from '../app.settings';
import { User } from '../interfaces/user';
import { EventEmitter } from 'events';

import { BehaviorSubject } from 'rxjs';
import { CurrentUserService } from '../services/current-user.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  user: User;

  constructor(private _http: Http,
    private currentUserService: CurrentUserService,
    private router: Router
    ) { }

  login(username: string, password: string) {
    const options = new RequestOptions({
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    });
    const self = this;
    return this._http.get(APPSETTINGS.AUTH_URL, options)
      .map((res: any) => {
        self.user = res.json();
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('is_staff', self.user.is_staff.toString());
        sessionStorage.setItem('is_superuser', self.user.is_superuser.toString());
        sessionStorage.setItem('is_active', self.user.is_active.toString());
        sessionStorage.setItem('user_permissions', self.user.user_permissions.toString());
        sessionStorage.setItem('currentUser', JSON.stringify(self.user));

        this.currentUserService.updateCurrentUser(self.user);
        return res;
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.user = undefined;
    this.currentUserService.updateCurrentUser({ 'username': '' });
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('is_staff');
    sessionStorage.removeItem('is_superuser');
    sessionStorage.removeItem('is_active');
    sessionStorage.removeItem('user_permissions');
    sessionStorage.removeItem('currentUser');

    this.router.navigate(['/merlin']);
  }
}
